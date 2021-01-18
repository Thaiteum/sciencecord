const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

module.exports = {
    name: 'info',
    description: "information",
    execute (message, args){

        if(cooldown.has(message.author.id)){
            message.channel.send('Please Dont spam the command!')
           
          
 
      }else{
        const embed = new MessageEmbed ()
        .setColor('#A2F3E6')
        .setTitle('Information <:gear:798597997196738641>')
        .setDescription('All commands have a s? before')
        .addField('suggest', 'Make a suggestion')
        .addField('bug', 'Report a bug')
        .addField('ping', 'Check the bots ping')
        .addField('clear', 'Clear up to 100 messages')
        .addField('help', 'Get help (Under construction)')
        .addField('avatar', 'See someones avatar or yours')
        .addField('calc', 'Resolve a math problem')
        
  
      

   message.channel.send(embed)

   cooldown.add(message.author.id);
   setTimeout(() => {
     cooldown.delete(message.author.id)
   }, 3000);



}


}}