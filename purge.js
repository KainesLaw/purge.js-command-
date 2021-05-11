module.exports = {
    name: "purge",
    description: "Clears messages",
    cooldown: 6,
    usage: "purge <number of messages>",
    category: "Administration",
    aliases: ['purge', 'clear', `delete`],

    async run (client, message, args) {

        const amount = args.join(" ");

        if(!amount) return message.reply('please provide an amount of messages for me to delete')

        if(amount > 69) return message.reply(`you cannot clear more than 69 messages at once`) //69 is chanable i just thought it was funny. depending on how much your bot can handle, i would amx it out to 100-200 just in case to prevent it from crashing

        if(amount < 1) return message.reply(`you need to delete at least one message`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Success!')

    }
}
