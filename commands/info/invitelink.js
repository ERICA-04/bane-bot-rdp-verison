const Discord = require("discord.js");
const { EmbedBuilder } = require("discord.js");
module.exports = {
  name: "invitelink",
  category: "info",
  permissions: [],
  devOnly: false,

  run: async ({ client, message, args }) => {
    message.reply(
      "**Invite your friends!** \n" + "https://discord.gg/takipsilimrp"
    );
  },
};
