import { Events, Interaction } from "discord.js";
import { GuildService } from "@robo/db"

export default {
    name : Events.GuildCreate,
    run: async (interaction : Interaction) => {
        const guild = new GuildService();

        console.log(interaction.id)
        await guild.ensureGuild(interaction.id);
    }
}