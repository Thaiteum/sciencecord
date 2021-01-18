const Discord = require('discord.js');
const client = new Discord.Client();



const prefix = "s?";

 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

const activities_list = [
    "with fire", 
    "with a rocket engine",
    "kerbal space program", 
    "rocket simulator"
    ]; // creates an arraylist containing phrases you want your bot to switch through.
    
    client.on('ready', () => {
        setInterval(() => {
            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
            client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
        }, 10000); // Runs this every 10 seconds.
    });
 
 
client.once('ready', () => {
    console.log('bot online');
});

 
client.on('message', message =>{
    if(message.author.bot) return;
    if(!message.content.toLowerCase().startsWith(prefix)) return;
    if(message.channel.type == 'dm') return;
    if(!message.content.startsWith(prefix)) return;

    const cooldown = new Set();
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(message.content.toLowerCase().startsWith(prefix)) {

     if(command === 'link'){


        if (!args[0]) return message.reply('Please specify a resource');
        if (args[2]) return message.reply('I cant send two links at a time');
        if(args[0] == 'nakka') {

        client.commands.get('nakkal').execute(message, args); }
        if(args[0] == 'asian') {

            client.commands.get('asian').execute(message, args); 
        } if(args[0] == 'bedtime') {
            client.commands.get('bedtime').execute(message, args); 
        }
    

      

    }

    }  if(command === 'suggest'){
        message.client.commands.get('suggest').run(client, message, args);
    }   if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }  if(command === 'info'){
        client.commands.get('info').execute(message, args);
    }  if(command === 'bug'){
        message.client.commands.get('bug').run(client, message, args);
    }  if(command === 'help'){
        message.client.commands.get('help').execute(message, args);
    } if(command === 'clear'){
        message.client.commands.get('clear').run(client, message, args);
    } if(command === 'avatar'){
        message.client.commands.get('avatar').run(client, message, args);
    } if(command === 'calc'){
        message.client.commands.get('calc').run(client, message, args);
    }  if(command === 'log'){
        client.commands.get('log').execute(message, args);
    } 



});
 
client.login('NzgxNTMyMTc0MjUxNzIwNzQ1.X7_Ajg.tj1EtqtPLIEfLvezXU3BqUSmRiQ');

//https://discord.com/oauth2/authorize?client_id=781532085159985152&permissions=8&scope=bot