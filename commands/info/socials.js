const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "socials",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message }) => {
    const user = message.author;

    const socials = new EmbedBuilder()
      .setColor("#EC0109")

      .setFooter({
        text: `Executed by ${user.tag}`,
        //  +"\u2800".repeat(20 /*any big number works too*/),
        iconURL: user.displayAvatarURL(),
      })

      .setTimestamp();

    message.channel.send({ embeds: [socials] });
  },
};
