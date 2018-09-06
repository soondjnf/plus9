const Discord = require('discord.js');
const client = new Discord.Client();


console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
افضل موقع بيديك ايديهات لاشهر الالعاب والمواقع 
زى : Fortnite , Spotify , Netflix , uplay , Minecraft , Steam , More ...
         https://to.free-gg.com/pTXzMgd                    
${member} 
**`)
}).catch(console.error)
})





 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
افضل موقع بيديك ايديهات لاشهر الالعاب والمواقع 
زى : Fortnite , Spotify , Netflix , uplay , Minecraft , Steam , More ...
         https://to.free-gg.com/pTXzMgd                    
${member} 
**`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);

