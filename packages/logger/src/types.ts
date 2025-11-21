export type LogLevel = "info" | "warn" | "error" | "success" | "debug" | "database";

export type LoggerConfig = {
    dir?: string;
    json?: boolean;
    level?: LogLevel | "silent";
    rotateDaily?: boolean;
    overrideConsole?: boolean;
    timezone?: string | null;
};

export type DatabaseLogType = "Prisma" | "MongoDB" | "Redis" | string;