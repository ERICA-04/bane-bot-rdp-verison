const Discord = require("discord.js");

module.exports = {
  name: "nuke",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    if (!message.member.permissions.has("0x0000000000000008"))
      return message.reply("di ka pwede boi");

    message.channel.clone().then((channel) => {
      channel.setParent(message.channel.parent.id);
      channel.setPosition(message.channel.position);
      channel.send(
        "https://tenor.com/view/explosion-mushroom-cloud-atomic-bomb-bomb-boom-gif-4464831"
      );
    });
    message.channel.delete();
  },
};
