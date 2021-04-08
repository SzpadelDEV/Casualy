const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "ogloszenie",
    run: async (client, message, args) => {
        let zmiana = args.slice(0).join(" ");

        if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send('To nie dla cB komenda oK?')
        if (!zmiana) return message.channel.send("Podaj treść Ogłoszenia!");

        const embed = new MessageEmbed()
            .setTitle("OGŁOSZENIE")
            .setThumbnail('https://pngimage.net/wp-content/uploads/2018/05/annonce-png.png')
            .setDescription(zmiana)
            .setColor("ORANGE")
            .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
            .setTimestamp()
  if (zmiana) client.channels.cache.get("797239818337124363").send(embed)
        if (zmiana) message.reply(`Ogłoszenie zostało wysłane!`);
        }
    }
  
