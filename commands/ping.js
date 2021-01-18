const { MessageEmbed } = require("discord.js");
const cooldown = new Set();



module.exports = {
    name: 'ping',
    description: "look at bots ping",
    execute(message, args){

        if(cooldown.has(message.author.id)){
            message.channel.send('Please Dont spam the command!')
           
          
 
      }else{

            const embed = new MessageEmbed ()
            .setColor('#A2F3E6')
            .setTitle('Ping <:gear:798597997196738641>')
            .setDescription(`My ping is: ${Date.now() - message.createdTimestamp} ms`)
        
        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, 3000);

 message.channel.send(embed)
        }




}}