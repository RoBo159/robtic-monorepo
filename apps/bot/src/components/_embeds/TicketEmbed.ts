import { EmbedBuilder } from "discord.js";

export function Created(data?: any) {
    return new EmbedBuilder()
        .setTitle(data?.title || "welcome in ticket")
        .setDescription(data?.description || "Support will be with you shortly. To close this press the close button")
        .setColor(data?.color || "DarkBlue")
        .setTimestamp()
        .setFooter({
            text: "@2025 RobTic, All rights reserved",
            iconURL: "https://raw.githubusercontent.com/robo159/assets/main/images/robo.jpg"
        })
}

export function Managed() {
    return new EmbedBuilder()
        .setDescription(`
        **🎟️ Ticket Management Panel**

        🔹 Add or remove members from this ticket  
        🔹 Claim or unclaim the ticket  
        🔹 Transfer ownership to another user  
        🔹 Rename the ticket *(up to 3 times every 3 minutes)*  

        **Take control — manage your ticket exactly how you want.**
    `)
        .setColor("DarkBlue")
        .setTimestamp()
        .setFooter({
            text: "© 2025 RobTic — All rights reserved",
            iconURL: "https://raw.githubusercontent.com/robo159/assets/main/images/robo.jpg"
        });

}