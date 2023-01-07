const Discord = require("discord.js");
const { Client, Message, EmbedBuilder } = require("discord.js");
module.exports = {
  name: "announce",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args, Discord }) => {
    // if (!message.member.permissions.has("MANAGE_MESSAGE"))
    //   return message.reply(
    //     `*You dont have enough permission to use this command.*`
    //   );

    let mention;

    if (!args.length)
      return message.channel.send(
        "> Usage: ??announce <#channel> <message> <-ping ?>"
      );

    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) return message.reply("Please specify a channel.");

    if (!args[1]) return message.reply("Please specify a message to announce");

    if (args.some((val) => val.toLowerCase() === "-ping")) {
      for (let i = 0; i < args.length; i++) {
        if (args[i].toLowerCase() === "-ping") args.splice(i, 1);
      }
      mention = true;
    } else mention = false;

    if (mention === true) channel.send("@everyone");

    const image = message.attachments.first()
      ? message.attachments.first().proxyURL
      : null;
    const user = message.author;
    const announce = new EmbedBuilder()
      .setColor("#EC0109")
      .setTitle("📢 Announcement")
      .setDescription(args.slice(1).join(" "))
      //.setThumbnail("https://media.discordapp.net/attachments/990503097732309022/1011499208827731989/20220823_125523.png?width=935&height=526")
      .setImage(image)
      .setFooter({
        text: "TAKIPSILIM RP",
        //  +"\u2800".repeat(20 /*any big number works too*/),
        iconURL: "https://cdn.discordapp.com/attachments/990503097732309022/993858120147279942/takipsilimdiscordlogo.png",
      })

      .setTimestamp();

    channel.send({ embeds: [announce] });
  },
};
