const Discord = require('discord.js');
const client = new Discord.Client();


console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
هذا الموقع يعطيك حسابات فورتنايت ماين كرافت سبوتفي وكل شي
هذا الرابط
         https://to.free-gg.com/pTXzMgd                    
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)
})





 client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝ 
هذا الموقع يعطيك حسابات فورتنايت ماين كرافت سبوتفي وكل شي
هذا الرابط
         https://to.free-gg.com/pTXzMgd                    
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)
})

client.login(process.env.BOT_TOKEN);

