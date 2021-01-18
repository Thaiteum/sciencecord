
module.exports = {
    name: 'clear',
    description: "mod",
run: async (client, message, args) => {


    
    if(message.member.hasPermission("ADMINISTRATOR")) {     ///To allow a simple moderator to use the command just put MANAGE_MESSAGES in place of ADMINISTRATOR 
      let messagecount = parseInt(args[0]);
    
      if(isNaN(messagecount)) return message.channel.send(":x: " + "| Please mention the amount of message that you want to delete");
    
      if(messagecount > 100){
        message.channel.send('i can only delete 100 messages at a time')
      }else if(messagecount < 2 ) {
        message.channel.send('i can only delete 100 messages at a time')
      } else {
    
      }{
        message.channel.messages.fetch({limit: messagecount}).then(messages => message.channel.bulkDelete(messages, true));
      }
    } else {
      return message.reply(`you are not allowed to do that!`)
    }
    }}
    