import { PrismaClient } from "./generated/prisma";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma =
    new PrismaClient({
        log: ["error", "warn"],
    }).$extends(withAccelerate())

// --- Main Exports ---
export {
    prisma
};