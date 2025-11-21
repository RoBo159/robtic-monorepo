import fs from "fs-extra";
import path from "path";
import dayjs from "dayjs";

export function ensureDir(dir: string) {
    try {
        fs.ensureDirSync(dir);
    } catch (err) {
        // swallow; caller will try again
    }
}

export function timestamp(local = true) {
    const now = dayjs();
    return now.format("YYYY-MM-DD HH:mm:ss");
}

export function dailyFile(name: string) {
    return `${name}-${dayjs().format("YYYY-MM-DD")}.log`;
}

export async function appendFileSafe(filePath: string, data: string) {
    try {
        await fs.appendFile(filePath, data + "\n");
    } catch (err: any) {
        if (err.code === "ENOENT") {
            await fs.ensureDir(path.dirname(filePath));
            await fs.appendFile(filePath, data + "\n");
            return;
        }
        throw err;
    }
}
