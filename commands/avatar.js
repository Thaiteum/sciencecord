const Discord = require('discord.js');
const cooldown = new Set();

module.exports = {
    name: "avatar",
    description: "Brodcast someone's avatar",

    async run (client, message, args) {


        if(cooldown.has(message.author.id)){
            message.channel.send('Please dont spam the commad!')
           
          
        
        }else{


        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("#A2F3E6")

        message.channel.send(embed);




        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, 3000);



        }
    }
}