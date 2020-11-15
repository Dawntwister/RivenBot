const { prefix } = require('../config.json');

module.exports = {
	name: 'kick',
    description: 'Kick a user from the server. /kick @<user>',
    guildOnly: true,
    execute(message, args) {
        const member = message.mentions.members.first();

        if (message.content.startsWith("$kick ")) {
            if (message.mentions.members.first()) {
                message.mentions.members.first.kick().then((member) => {
                    message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
                }).catch(() => {
                    message.channel.send("I do not have permissions to do this");
                });
            }
        }else if (message.content.startsWith("$ban ")) {
            if (message.mentions.members.first()) {
                message.mentions.members.first.ban().then((member) => {
                    message.channel.send(":wave: " + member.displayName + " has been successfully banned :point_right: ");
                }).catch(() => {
                    message.channel.send("I do not have permissions to do this");
                });
            }
        }
        member.kick();
    },
};