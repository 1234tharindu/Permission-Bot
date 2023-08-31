const { Events } = require("discord.js");

module.exports = {
    name: Events.MessageCreate,
    once: false,
    async execute(message) {
        // Auto Reply
        console.log(message.content,"d")
        message.channel.send(message.content)
        if (message.channel.name === "general-chat")
            if (message.content.toLowerCase() === "hi") {
                message.reply({ files: ['https://tenor.com/view/bad-teeth-breath-hot-gif-23600638.gif'] });
            };
    }
}