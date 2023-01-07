const { default: axios } = require("axios");
const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "banner",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    const user = message.mentions.users.first() || message.author;

    if (!user) return message.reply("give user");

    axios
      .get(`https://discord.com/api/users/${user.id}`, {
        headers: {
          Authorization: `Bot ${client.token}`,
        },
      })
      .then((res) => {
        const { banner, accent_color } = res.data;
        if (banner) {
          const extension = banner.startsWith("a_") ? ".gif" : ".png";
          const url = `https://cdn.discordapp.com/banners/${user.id}/${banner}${extension}?size=2048`;
          const embed = new EmbedBuilder()
            .setTitle(`${user.username}`)
            .setImage(url)
            .setColor(accent_color || "#EC0109")
            .setTimestamp()
            .setFooter({
              text: `${user.tag}`,
              iconURL: user.displayAvatarURL(),
            });

          message.channel.send({ embeds: [embed] });
        } else {
          if (accent_color) {
            const embed1 = new EmbedBuilder()
              .setDescription(
                `${user.tag} doesn't have a banner but they do have an accent color`
              )
              .setColor(accent_color);
            message.channel.send({ embeds: [embed1] });
          } else
            return message.reply(
              `${user.tag} does not have a banner nor a accent color`
            );
        }
      });
  },
};
