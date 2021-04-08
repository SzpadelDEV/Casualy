const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "zmiana",
    run: async (client, message, args) => {
        let zmiana = args.slice(0).join(" ");

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('To nie dla cB komenda oK?')
        if (!zmiana) return message.channel.send("Podaj co zostało Zmienione!");

        const embed = new MessageEmbed()
            .setAuthor("ZMIANA", 'https://www.dresdnerschulkonzerte.de/hskdapp/images/loading.gif')
            .setDescription(zmiana)
            .setColor("ORANGE")
            .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
            .setTimestamp()
  if (zmiana) client.channels.cache.get("797900486564118619").send(embed)
        if (zmiana) message.reply(`Nowa Zmiana została wysłana!`);
        }
    }
  