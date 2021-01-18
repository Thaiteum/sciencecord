
const { MessageEmbed } = require("discord.js");
const cooldown = new Set();

module.exports = {
    name: 'help',
    description: "help",
    execute(message, args){
       
        if(cooldown.has(message.author.id)){
            message.channel.send('Please Dont spam the command!')
           
          
 
      }else{

 message.channel.send(`to request help from the mods please ping them. <:hammer:798619559375536128>`);



 cooldown.add(message.author.id);
 setTimeout(() => {
   cooldown.delete(message.author.id)
 }, 3000);





      }
    
}}