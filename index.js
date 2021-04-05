const { Plugin } = require('powercord/entities');
module.exports = class clap extends Plugin {
    startPlugin() {
        powercord.api.commands.registerCommand({
            command: 'clap',
            description: 'Replaces all spaces with a clap emote.',
            usage: '{c} <text>',
            executor: async (message) => {
                return {
                    send: true,
                    result: message.join(" :clap: ")
                }
            }
        });
    }
    pluginWillUnload() {
        powercord.api.commands.unregisterCommand('clap');
    }
}