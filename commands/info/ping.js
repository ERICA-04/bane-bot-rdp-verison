module.exports = {
  name: "ping",
  category: "info",
  permissions: [],
  devOnly: false,
  run: async ({ client, message, args }) => {
    message.reply(
      " I'm online! Type `!help` to see available commands \n" + "\n" +
       `\**\Ping\**\: ${client.ws.ping}ms`
    );
  },
};
