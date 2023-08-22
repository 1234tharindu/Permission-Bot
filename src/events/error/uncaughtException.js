const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "uncaughtException",
  async execute(err, client) {
    console.log("Uncaught Exception:\n", err);

    const exceptionembed = new EmbedBuilder()
      .setTitle("Uncaught Exception")
      .setDescription(`\`\`\`${require("util").inspect(err)}\`\`\``)
      .setColor("Red");
    client.channels.cache
      .get(client.config.channels.logs)
      ?.send({ embeds: [exceptionembed] });
  },
};
