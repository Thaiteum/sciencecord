const math = require('mathjs');
const cooldown = new Set();

const Discord = require('discord.js');

module.exports = {
    name: "calc",
    description: "Get the answer to a math problem",


    async run (client, message, args){



        if(cooldown.has(message.author.id)){
            message.channel.send('Please dont spam the command!')
           
          
        
        }else{
        




        if(!args[0]) return message.channel.send('Please provide a question');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Please provide a **valid** question')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('#A2F3E6')
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);




        cooldown.add(message.author.id);
        setTimeout(() => {
          cooldown.delete(message.author.id)
        }, 3000);
    



    }
    }
}