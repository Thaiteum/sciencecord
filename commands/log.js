
const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

module.exports = {
    name: 'log',
    description: "info",
    execute(message, args){
       
        if(cooldown.has(message.author.id)){
            message.channel.send('Please Dont spam the command!')
           
          
 
      }else{

        const embed = new MessageEmbed ()
        .setTitle('Changelog')
        .setDescription('Bot version 1.1')
        .addField('Added 9 commands', 'check by doing c?info')




 message.channel.send(embed);



 cooldown.add(message.author.id);
 setTimeout(() => {
   cooldown.delete(message.author.id)
 }, 3000);





      }
    
}}