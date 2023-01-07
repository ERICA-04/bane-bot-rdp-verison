const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "directory",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message }) => {
    const user = message.author;
    const directory = new EmbedBuilder()
      .setColor("#EC0109")
      .setTitle("SERVER DIRECTORY")

      .addFields(
        {
          name: "> BULLETIN BOARD",
          value: "—  \n" + "— \n" + "—  \n" + " \u2800      \n",
        },
        {
          name: "> HELP DESK",
          value: "— \n" + "—  \n" + " \u2800      \n",
        }
      )

      .setFooter({
        text: `Executed by ${user.tag}`,
        //  +"\u2800".repeat(20 /*any big number works too*/),
        iconURL: user.displayAvatarURL(),
      })

      .setTimestamp();

    message.channel.send({ embeds: [directory] });
  },
};
