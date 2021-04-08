const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ankieta",
    run: async (client, message, args) => {

        const emote = client.emojis.cache.find(e => e.name === 'gutgut')
        const emote1 = client.emojis.cache.find(e => e.name === 'niegut')

        let zmiana = args.slice(0).join(" ");

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('To nie dla cB komenda oK?')
        if (!zmiana) return message.channel.send("Podaj treść Ankiety!");

        const embed = new MessageEmbed()
            .setTitle("ANKIETA")
            .setThumbnail('https://img.icons8.com/ios/452/poll-topic.png')
            .setDescription(zmiana)
            .setColor("ORANGE")
            .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
            .setTimestamp()
  if (zmiana) client.channels.cache.get("797251478069837864").send(embed).then(message => message.react(emote)).then(reaction => reaction.message.react(emote1))
        if (zmiana) message.reply(`Ankieta  zostało wysłane!`);
        }
    }
  
