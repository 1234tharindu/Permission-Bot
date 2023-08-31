const { Events, ActivityType, EmbedBuilder } = require("discord.js");
let i = 0;

module.exports = {
  name: Events.ClientReady,
  once: true,
  async execute(client) {
    client.guilds.fetch(client.config.guildId).then(async (guild) => {
      client.user.setStatus("idle");
      console.log(
        `\x1B[94mReady ${client.user.tag} is logged in and online ☑️\x1B[39m`
      );
      client.channels.cache.get(client.config.channels.logs)?.send({
        embeds: [
          new EmbedBuilder()
            .setColor(0x00ff00)
            .setTitle(`${client.user.username} is online`)
            .setTimestamp()
            .setFooter({
              text: `${client.user.username}`,
              iconURL: client.user.displayAvatarURL(),
            }),
        ],
      });
      // ACTIVITY STATUS
      setInterval(() => {
        const activities_list = [
          {
            name: `${guild.name}`,
            type: ActivityType.Watching,
            status: "idle",
          },
          {
            name: `${guild.memberCount} Members`,
            type: ActivityType.Watching,
            status: "idle",
          },
          {
            name: "Spotify",
            type: ActivityType.Listening,
            status: "idle",
          },
        ];

        if (i == 3) {
          i = 0;
        }
        client.user.setPresence({ activities: [activities_list[i++]] });
      }, 3000);

      // Server Stats
      // setInterval(() => {
      //   client.channels.cache
      //     .get(client.config.serverStatsChannel)
      //     ?.setName(`Total Members : ${guild.memberCount}`);
      // }, 60000);
    });
  },
};
