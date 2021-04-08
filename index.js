const {Collection, Client, Discord} = require('discord.js')
const { MessageEmbed } = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true
})
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./komendy/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    client.user.setActivity(`${prefix}pomoc`)
    console.log(`${client.user.username} ✅`)
})

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})

client.on('guildMemberAdd', async member => { 
    const regulamin = member.guild.channels.cache.get('799726587267514378')
    const bot = member.guild.channels.cache.get('798290536338817044')

    const Channel = member.guild.channels.cache.get('797834682779697164') 
let embed = new MessageEmbed()
.setTitle('Nowy Użytkownik')
.setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
.setColor('ORANGE')
.setDescription(`Cześć ${member}! Witamy cię na naszym serwerze!\nZapoznaj się z kanałem ${regulamin}!\nDodaj Bota Casualy.AD ${bot}!`)
.setTimestamp()
.setFooter('Casualy.AD || Twój Bot Reklamowy!')
Channel.send(embed)
})

client.on('message', async message => {

    const emote = client.emojis.cache.find(e => e.name === 'gutgut')
    const emote1 = client.emojis.cache.find(e => e.name === 'niegut')

  if (message.author.bot || message.channel.type === 'dm') return;
  if (!message.channel.id.includes('800861183959498802')) {
      return;
  } else {
      message.delete()
      let embed = new MessageEmbed()
      .setAuthor(`Nowa Sugestia od ${message.author.username}`, message.author.avatarURL())
      .setColor('ORANGE')
      .setDescription('```' +message.content+'```')
      .setTimestamp()
      .setFooter(`Casualy.AD | Twój Bot Reklamowy!`)
      message.channel.send(embed).then(message => message.react(emote)).then(reaction => reaction.message.react(emote1))
  }
})



  
client.login(config.token)