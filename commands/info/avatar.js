const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "avatar",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const user = message.mentions.users.first() || message.author;
    //  const displayAvatar = new EmbedBuilder()
    //    .setColor(`RANDOM`)
    //    .setAuthor(user.username)
    //    .setFooter({
    //      text: `Executed by ${user.tag}`,
    //      iconURL:
    //        "https://media.discordapp.net/attachments/962330594971377694/1022474363334836266/TGR_Teletigers_logo_Alliance_Games.png?width=525&height=525",
    //    })
    //    .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }));
    //  message.channel.send({ embeds: [displayAvatar] });
    const displayAvatar = new EmbedBuilder()
      .setColor("#EC0109")
      // .setAuthor({
      //   name: `${user.username}`,
      // })
      .setTitle(`${user.username}`)
      .setImage(user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setTimestamp()
      .setFooter({
        text: `${user.tag}`,
        iconURL: user.displayAvatarURL(),
      });

    message.channel.send({ embeds: [displayAvatar] });
  },
};
