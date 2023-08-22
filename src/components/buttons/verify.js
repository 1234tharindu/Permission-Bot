const {
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  ActionRowBuilder,
} = require("discord.js");

module.exports = {
  data: {
    name: "verify-button",
  },
  async execute(interaction, client) {
    if (interaction.member.roles.cache.has(client.config.roles.verified)) {
      await interaction.reply({
        content: "You have been already verified ✅",
        ephemeral: true,
      });
    } else {
      const modal = new ModalBuilder()
        .setCustomId("verify-modal")
        .setTitle("Get Verify ✅");
      const row = new ActionRowBuilder().addComponents(
        new TextInputBuilder()
          .setCustomId("id")
          .setLabel("Enter the ID")
          .setStyle(TextInputStyle.Short)
          .setMinLength(8)
          .setMaxLength(8)
          .setPlaceholder("123456789")
          .setRequired(true)
      );

      modal.addComponents(row);
      await interaction.showModal(modal);
    }
  },
};
