const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "help",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message }) => {
    const user = message.author;
    const help = new EmbedBuilder()
      .setColor("#EC0109")
      .setTitle("Available Commands")
      .setDescription(
        "*Type !!command to execute a command.* \n" + " \u2800      \n"
      )

      // .setThumbnail(
      //   "https://media.discordapp.net/attachments/962330594971377694/1022474363334836266/TGR_Teletigers_logo_Alliance_Games.png?width=683&height=683"
      // )
      //working
      .addFields({
        name: "avatar",
        value: "Display mentioned user/self profile picture.",
      })
      //working
      .addFields({
        name: "banner",
        value: "Display mentioned user/self profile banner.",
      })
      //working
      // .addFields({
      //   name: "directory",
      //   value: "Display the directory",
      // })
      //working - need modification
      // .addFields({
      //   name: "events",
      //   value: "Display upcoming events",
      // })
      //working
      .addFields({
        name: "help",
        value: "Display available commands",
      })
      //working
      .addFields({
        name: "invitelink",
        value: "Display invite link ",
      })
      .addFields({
        name: "nuke",
        value: "Delete all the content of a channel",
      })
      //working
      .addFields({
        name: "profile",
        value: "Display user's information",
      })
      //working
      .addFields({
        name: "ping",
        value: "Check if the bot is online",
      })
      //working
      // .addFields({
      //   name: "rules",
      //   value: "Display server rules", })
      //working

      .addFields({
        name: "serverinfo",
        value: "Display server's information",
      })
      //working
      // .addFields({
      //   name: "socials",
      //   value:
      //     "Display the official social media accounts of Teletigers Esports Club",
      // })

      // .addFields({
      //   name:
      //     " \u2800      \n" +
      //     "Visible only for testing. Can only be executed by admins",
      //   value:
      //     " **nuke**  \n" +
      //     "Delete all the content of a channel \n" +
      //     " **announce**  \n" +
      //     "Usage: ??announce <#channel> <message> \n Only default discord emoji ",
      // })

      .setFooter({
        text: `Executed by ${user.tag}`,
        //  +"\u2800".repeat(20 /*any big number works too*/),
        iconURL: user.displayAvatarURL(),
      })

      .setTimestamp();

    message.channel.send({ embeds: [help] });
  },
};
