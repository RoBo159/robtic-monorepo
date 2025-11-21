import chalk from "chalk";
import path from "path";
import { ensureDir, timestamp, dailyFile, appendFileSafe } from "./utils";
import { LoggerConfig, DatabaseLogType, LogLevel } from "./types";

const defaultConfig: Required<LoggerConfig> = {
    dir: path.join(process.cwd(), "logs"),
    json: false,
    level: "debug",
    rotateDaily: false,
    overrideConsole: false,
    timezone: null,
};

const levelPriority: Record<LogLevel, number> = {
    debug: 0,
    success: 1,
    info: 2,
    warn: 3,
    error: 4,
    database: 5,
};

let cfg: Required<LoggerConfig> = { ...defaultConfig };

export function initLogger(userCfg?: LoggerConfig) {
    cfg = { ...cfg, ...(userCfg || {}) };
    ensureDir(cfg.dir);

    if (cfg.overrideConsole) {
        // keep originals
        const olog = console.log.bind(console);
        const oerr = console.error.bind(console);
        const owarn = console.warn.bind(console);

        console.log = (...args: any[]) => {
            Logger.info(args.map(String).join(" "));
            olog(...args);
        };

        console.error = (...args: any[]) => {
            Logger.error(args.map(String).join(" "));
            oerr(...args);
        };

        console.warn = (...args: any[]) => {
            Logger.warn(args.map(String).join(" "));
            owarn(...args);
        };
    }
}

function shouldLog(level: LogLevel) {
    if (cfg.level === "silent") return false;
    return levelPriority[level] >= levelPriority[cfg.level as LogLevel];
}

function formatConsole(level: LogLevel, msg: string) {
    switch (level) {
        case "info":
            return `${chalk.blue("[INFO]")} ${msg}`;
        case "success":
            return `${chalk.green("[SUCCESS]")} ${msg}`;
        case "warn":
            return `${chalk.yellow("[WARN]")} ${msg}`;
        case "error":
            return `${chalk.red("[ERROR]")} ${msg}`;
        case "debug":
            return `${chalk.magenta("[DEBUG]")} ${msg}`;
        case "database":
            return `${chalk.cyan("[DATABASE]")} ${msg}`;
        default:
            return msg;
    }
}

async function write(levelFile: string, text: string, json?: any) {
    const baseName = cfg.rotateDaily ? dailyFile(levelFile) : `${levelFile}.log`;
    const logPath = path.join(cfg.dir, baseName);

    const jsonName = baseName.replace(/\.log$/, ".jsonl");
    const jsonPath = path.join(cfg.dir, jsonName);

    try {
        if (cfg.json && json !== undefined) {
            await appendFileSafe(jsonPath, JSON.stringify(json));
        }

        await appendFileSafe(logPath, text);

    } catch {
        ensureDir(cfg.dir);

        if (cfg.json && json !== undefined) {
            await appendFileSafe(jsonPath, JSON.stringify(json));
        }

        await appendFileSafe(logPath, text);
    }
}


export const Logger = {
    info: async (msg: string) => {
        if (!shouldLog("info")) return;
        const line = `${timestamp()} [INFO] ${msg}`;
        console.log(formatConsole("info", msg));
        await write("info", line, { level: "info", time: timestamp(), msg });
    },

    success: async (msg: string) => {
        if (!shouldLog("success")) return;
        const line = `${timestamp()} [SUCCESS] ${msg}`;
        console.log(formatConsole("success", msg));
        await write("success", line, { level: "success", time: timestamp(), msg });
    },

    warn: async (msg: string) => {
        if (!shouldLog("warn")) return;
        const line = `${timestamp()} [WARN] ${msg}`;
        console.warn(formatConsole("warn", msg));
        await write("warn", line, { level: "warn", time: timestamp(), msg });
    },

    error: async (msg: string, err?: unknown, type: "database" | "apps" = "apps") => {
        if (!shouldLog("error")) return;
        const label = type === "database" ? "DATABASE ERROR" : "ERROR";
        const line = `${timestamp()} [${label}] ${msg}${err ? "\n" + String(err) : ""}`;
        console.error(formatConsole("error", msg));
        if (err) console.error(err);

        const file = type === "database" ? "database-error" : "error";
        await write(file, line, { level: file, time: timestamp(), msg, err: err ? String(err) : null });
    },

    database: async (msg: string, Type: DatabaseLogType = "Prisma") => {
        if (!shouldLog("database")) return;
        const line = `${timestamp()} [DATABASE ${Type}] ${msg}`;
        console.log(formatConsole("database", msg));
        await write("database", line, { level: "database", time: timestamp(), msg, engine: Type });
    },

    debug: async (msg: string) => {
        if (!shouldLog("debug")) return;
        const line = `${timestamp()} [DEBUG] ${msg}`;
        console.log(formatConsole("debug", msg));
        await write("debug", line, { level: "debug", time: timestamp(), msg });
    },

    health: async (msg: string) => {
        const line = `${timestamp()} [HEALTH] ${msg}`;
        console.log(chalk.gray(`[HEALTH] ${msg}`));
        await write("health", line, { level: "health", time: timestamp(), msg });
    },

    perf: async (label: string, ms: number) => {
        const line = `${timestamp()} [PERF] ${label} ${ms}ms`;
        console.log(chalk.gray(`[PERF] ${label} ${ms}ms`));
        await write("perf", line, { level: "perf", time: timestamp(), label, ms });
    }
};
