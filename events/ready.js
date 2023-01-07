// const { client } = require("../index");

module.exports = {
  name: "ready",
  once: true,
  run: async (bot) => {
    console.log("Logged in as " + bot.client.user.tag);
  },
};
// run: async (client) => {
//   console.log("Ready!");
// const options = {
//   type: ActivityType.Watching,
//   text: "Teletigers Esports Club",
//   status: "online",
// };

// client.user.setPreference({
//   activities: [
//     {
//       name: options.text,
//       type: options.status.type,
//     },
//   ],
//   status: options.status,
// });
//     client.user.setPresence({
//       activities: { name: `Teletigers Esports Club`, type: `WATCHING` },
//       status: "dnd",
//     });
//   },
// };
// client.user.setPresence({
//   activities: [{ name: `Teletigers Esports Club`, type: `WATCHING` }],
//   status: "dnd",
// });
