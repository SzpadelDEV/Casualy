const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "embed",
    run: async (client, message, args) => {
        let zmiana = args.slice(1).join(" ");
        let tytul = args[0]


        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('To nie dla cB komenda oK?')
        if(!tytul) return message.channel.send('Podaj Tytuł Embedu!')

        if (!zmiana) return message.channel.send("Podaj treść Embedu!");

        const embed = new MessageEmbed()
            .setTitle(tytul)
            .setDescription(zmiana)
            .setColor("ORANGE")
            .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
            .setTimestamp()
  if (zmiana) message.channel.send(embed)
        }
    }
  
