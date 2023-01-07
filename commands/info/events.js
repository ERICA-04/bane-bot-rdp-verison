const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "events",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message }) => {
    const user = message.author;
    const event = new EmbedBuilder()
      .setColor("#EC0109")
      .setTitle("Events")

      .addFields({
        name: "No events",
        value: "Follow to get notified when there is an upcoming event",
      })

      .setFooter({
        text: `Executed by ${user.tag}`,
        //  +"\u2800".repeat(20 /*any big number works too*/),
        iconURL: user.displayAvatarURL(),
      })

      .setTimestamp();

    message.channel.send({ embeds: [event] });
  },
};
