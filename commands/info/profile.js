const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
const moment = require("moment");
module.exports = {
  name: "profile",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const { guild, channel } = message;

    const user = message.mentions.users.first() || message.member.user;
    const member = message.guild.members.cache.get(user.id);
    if (!member) return message.reply("Please specify a member!");

    const memberRoles = member.roles.cache
      .filter((roles) => roles.id !== message.guild.id)
      .map((role) => role.toString());

    const info = new EmbedBuilder()
      .setColor("#EC0109")
      .setTitle(`${user.username}`)
      .setAuthor({
        name: "User Info",
      })
      .setThumbnail(user.displayAvatarURL())
      .addFields(
        {
          name: "User tag",
          value: user.tag,
        },
        {
          name: "Nickname " + "\u2800" + "\u2800" + "\u2800" + "\u2800",
          value: member.nickname || "None ",
          inline: true,
        },
        {
          name: "Bot " + "\u2800" + "\u2800" + "\u2800" + "\u2800" + "\u2800",
          value: `${user.bot} `,
          inline: true,
        },

        {
          name: "Roles" + "\u2800" + "\u2800" + "\u2800" + "\u2800" + "\u2800",
          value: ` ${memberRoles}`,
          inline: true,
        },
        {
          name: "Joined server",
          value: `${moment(member.joinedTimestamp).format(
            "LL"
          )} \u2800 ${moment(member.joinedTimestamp).fromNow()} `,
          // value: `${new Date(member.joinedTimestamp)}`,
        },
        {
          name: "Joined Discord",
          value: `${moment(user.createdTimestamp).format("LL")} \u2800 ${moment(
            user.createdTimestamp
          ).fromNow()} `,
          // value: `${new Date(user.createdTimestamp)}`,
        }
      )

      .setTimestamp();

    message.channel.send({ embeds: [info] });
  },
};
