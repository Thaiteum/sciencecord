const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const cooldown = new Set();

module.exports = {
  name: "bug",
  description: "report",
 run: async(client, message, args) => {


  if(cooldown.has(message.author.id)){
    message.channel.send('You will be abble to send another bug report in 5 minutes')
   
  

}else{

  
  if (!args[0]) return message.reply('Please describe the bug you found');
else{
let bug = args.join(" ").slice(0);
let user = message.author.username;
let embed = new MessageEmbed ()
.setTitle("Bug Report <:BugHunter:798600535929782303>")
.setThumbnail("https://cdn.discordapp.com/attachments/791393081609027667/798599920537567232/BugHunter.png")
.addField('Bug:', `${bug}`)
.addField('Reported By:', `${user}`)
.setColor("#A2F3E6")

message.channel.send("**New Bug reported Status: Under revision**")
message.channel.send(embed).then(i => i.react("⏳"))

  
const guild = message.client.guilds.cache.get('791393081609027664');
    guild.channels.cache.get('798604905279520819').send(embed);



    cooldown.add(message.author.id);
    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, 300000);



}
}}
}