import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";

const build = (id: "close" | "claim" | "transcript" | "reopen" | "manage" | "delete") => {
    switch (id) {
        case "close":
            return new ButtonBuilder()
                .setCustomId("close")
                .setLabel("Close")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("🔒");
        case "manage":
            return new ButtonBuilder()
                .setCustomId("manage")
                .setLabel("Manage")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("⚙️");
        case "claim":
            return new ButtonBuilder()
                .setCustomId("claim")
                .setLabel("Claim")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("📝");
        case "transcript":
            return new ButtonBuilder()
                .setCustomId("transcript")
                .setLabel("Transcript")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("📄");
        case "reopen":
            return new ButtonBuilder()
                .setCustomId("reopen")
                .setLabel("Reopen")
                .setStyle(ButtonStyle.Secondary)
                .setEmoji("🔓");
        case "delete":
            return new ButtonBuilder()
                .setCustomId("delete")
                .setLabel("Delete")
                .setStyle(ButtonStyle.Danger)
                .setEmoji("🗑️");
    }
};

export const row = (buttons: ("close" | "claim" | "transcript" | "reopen" | "manage" | "delete")[]) => new ActionRowBuilder<ButtonBuilder>().addComponents(
    buttons.map(build)
);