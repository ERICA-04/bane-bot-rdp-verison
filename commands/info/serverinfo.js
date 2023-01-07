const Discord = require("discord.js");
const { EmbedBuilder, Message } = require("discord.js");
const moment = require("moment");

module.exports = {
  name: "serverinfo",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const user = message.author;
    const guild = message.guild;
    const image =
      "https://cdn.discordapp.com/attachments/990503097732309022/1011499208827731989/20220823_125523.png";

    const { owner, region, memberCount, afkTimeout } = guild;
    const server = new EmbedBuilder()
      .setAuthor({
        name: "Server Information",
      })
      .setColor("#EC0109")
      .setTitle(message.guild.name)
      // .setDescription("*description * \n" + " \u2800      \n")
      .setThumbnail(message.guild.iconURL())
      .addFields({
        name: "**__GENERAL INFO__**",
        value:
          //  `**ID:** ${message.guild.id} \n` +
          //  `**ID:** ${message.guild.verified} \n` +
          `**Name:** ${message.guild.name}\n` + " \u2800      \n",
      })
      .addFields({
        name: "**__COUNTS__**",
        value:
          `**Member:** ${message.guild.memberCount} members \n` +
          `**Role:** ${message.guild.roles.cache.size} roles \n` +
          // `**Channels:** ${
          //   guild.channels.cache.filter(
          //     (ch) => ch.type === "text" || ch.type === "voice"
          //   ).size
          // } total (Text: ${
          //   guild.channels.cache.filter((ch) => ch.type === "text").size
          // }, Voice: ${
          //   guild.channels.cache.filter((ch) => ch.type === "voice").size
          // })\n` +
          `**Emojis:** ${guild.emojis.cache.size} (Regular: ${
            guild.emojis.cache.filter((e) => !e.animated).size
          }, Animated: ${
            guild.emojis.cache.filter((e) => e.animated).size
          }) \n ` +
          " \u2800      \n",
      })
      .addFields({
        name: "**__ADDITIONAL INFORMATION__**",
        value:
          `**Created:** ${moment(guild.createdTimestamp).format("LL")} ${moment(
            guild.createdTimestamp
          ).fromNow()}  \n` +
          // `**Region:** ${guild.region} \n` +
          `**Boost Tier:** ${
            guild.premiumTier ? `Tire ${guild.premiumTier}` : "None"
          } \n` +
          `**Boost Count:** ${guild.premiumSubscriptionCount || "0"} \n`,
      })
      .setImage(image)
      .setFooter({
        text: `Executed by ${user.tag}`,
        //  +"\u2800".repeat(20 /*any big number works too*/),
        iconURL: user.displayAvatarURL(),
      })

      .setTimestamp();

    message.channel.send({ embeds: [server] });
  },
};
