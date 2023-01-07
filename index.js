const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const Discord = require("discord.js");
require("dotenv").config(); //token

const { token } = require("./config.json");

const client = new Discord.Client({
  presence: {
    status: "dnd",
    activities: [
      {
        name: "Orale ",
        type: ActivityType.Streaming,
      },
    ],
  },
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

let bot = {
  client,
  prefix: "!!",
  owners: ["574828136919728138"], //river
};

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
// client.slashcommands = new Discord.Collection();

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload);
client.loadEvents(bot, false);

client.loadCommands = (bot, reload) =>
  require("./handlers/commands")(bot, reload);
client.loadCommands(bot, false);

// client.loadSlashCommands = (bot, reload) =>
//   require("./handlers/slashcommands")(bot, reload);
// client.loadSlashCommands(bot, false);

module.exports = bot;

// client.on("interactionCreate", (interaction) => {
//   if (!interaction.isCommand()) return;
//   if (!interaction.isGuild())
//     return interaction.reply("This command can only be used in a server");

//   const slashcmd = client.slashcommands.get(interaction.commandName);
//   if (!slashcmd) return interaction.reply("Invalid command");

//   if (slashcmd.perms && !interaction.member.permissions.has(slashcmd.perm))
//     return interaction.reply("You do not have permission for this command");

//   slashcmd.run(client, interaction);
// });

//wag galawin
client.login(token);
