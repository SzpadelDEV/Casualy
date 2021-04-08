const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "pomoc",
    run: async (client, message, args) => { 


        if (!args[0]) {
            client.user.displayAvatarURL()
            const pomocmenu = new MessageEmbed()
            .setThumbnail(`${ client.user.displayAvatarURL()}`)
        .setTitle("YGHYM..")
        .setColor("ORANGE")
       .setDescription('Ja tu tylko sprzątam!')
        .setFooter("Casualy.AD || Twój Bot Reklamowy!")
        .setTimestamp()
        message.channel.send(pomocmenu)
        }
      }
    }