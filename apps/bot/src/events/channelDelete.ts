import { data } from "@/lib/data";
import { Events, Interaction } from "discord.js";

export default {
    name: Events.ChannelDelete,
    run: (interaction : Interaction) => {
        if(!interaction.channel?.isTextBased()) return;
        const found = data.find(e => e._id === interaction.id);
        if(!found) return;

        console.log("ticket channel was removed")
    }
}