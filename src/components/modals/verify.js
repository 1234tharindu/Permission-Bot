const { EmbedBuilder } = require("discord.js");

module.exports = {
  data: {
    name: "verify-modal",
  },
  async execute(interaction, client) {
    const input = interaction.fields.getTextInputValue("id");

    if (client.db[input]) {
      const roles = [...client.db[input], client.config.roles.verified];
      let verified = new EmbedBuilder()
        .setTitle("✅ Verified")
        .setDescription(
          `${interaction.user}, You completed the verification successfully, and you have been given access to the **${interaction.guild.name}**!`
        )
        .setTimestamp()
        .setColor("Green")
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }));

      await interaction.member.roles.add(roles);
      interaction.reply({ embeds: [verified], ephemeral: true });
    } else {
      let unverified = new EmbedBuilder()
        .setTitle("❌ Verification Failed")
        .setDescription(
          `${interaction.user}, You failed to verify.\n Check your ID and try again !`
        )
        .setTimestamp()
        .setColor("Red")
        .setThumbnail(interaction.guild.iconURL({ dynamic: true }));
      interaction.reply({ embeds: [unverified], ephemeral: true });
    }
  },
};
