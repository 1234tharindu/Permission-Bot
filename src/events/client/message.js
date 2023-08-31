const { Events } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message,) {
        console.log(message);
        // Auto Reply
            if (message.content.toLowerCase() === "hi") {
                message.reply({ files: ['https://tenor.com/view/bad-teeth-breath-hot-gif-23600638.gif'] });
            };
    }
}