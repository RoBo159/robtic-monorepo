import client from "lib/Client";

import { Loader } from "utils/loader";

const handler = new Loader("src");

handler.load("events", async (filePath) => {
    const event = (await import(filePath)).default;

    if (event.name && event.run) {
        if (event.once) {
            client.once(event.name, (...args) => event.run(...args));
        } else {
            client.on(event.name, (...args) => event.run(...args));
        }
    } else {
        throw new Error(`Event at ${filePath} is missing required properties.`);
    }
}, "EVENT");

handler.load("components", async (filePath) => {
    const event = (await import(filePath)).default;

    if (event.name && event.run) {
        client.on(event.name, (...args) => event.run(...args));
    } else {
        throw new Error(`Event at ${filePath} is missing required properties.`);
    }
}, "EVENT");