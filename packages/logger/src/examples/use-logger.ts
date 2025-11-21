import { initLogger, Logger } from "../logger";

async function main() {
    initLogger({ json: true, rotateDaily: true, overrideConsole: false, level: "debug" });

    await Logger.health("Bot started");
    await Logger.info("Ticket service ready");
    await Logger.debug("cache warmed");

    try {
        throw new Error("test error");
    } catch (err) {
        await Logger.error("caught test error", err);
    }

    await Logger.database("Prisma connected", "Prisma");
    await Logger.perf("ticket.create", 123);
}

main();