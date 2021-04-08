const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "status",
    run: async (client, message, args) => {
      

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('To nie dla cb komenda ok?')




        if(args[0] === 'on') { 
        const embed = new MessageEmbed()
            .setAuthor("BOT ONLINE", 'https://emoji.gg/assets/emoji/6910_green_circle.png')
            .setDescription('Bot działa poprawnie!')
            .setColor("GREEN")
            .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
            .setTimestamp()
 client.channels.cache.get("797238585026674748").send(embed)
         message.reply(`Status został wysłany!`);
    } else if(args[0] === 'off') {
        const embed = new MessageEmbed()
        .setAuthor("BOT OFFLINE", 'https://emoji.gg/assets/emoji/7034_Red.png')
        .setDescription('Bot aktuaklnie jest Offline!')
        .setColor("RED")
        .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
        .setTimestamp()
client.channels.cache.get("797238585026674748").send(embed)
    message.reply(`Status został wysłany!`);
    } else if(args[0] === 'update') {
        const embed = new MessageEmbed()
        .setAuthor("BOT UPDATE", 'https://emoji.gg/assets/emoji/3379_Pin.png')
        .setDescription('Bot przechodzi Aktualizacje zaraz wróci!')
        .setColor("ORANGE")
        .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
        .setTimestamp()
 client.channels.cache.get("797238585026674748").send(embed)
    message.reply(`Status został wysłany!`);
    }
        }
    }
  