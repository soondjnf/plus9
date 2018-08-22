const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

  client.on('message', async message => {
  if(message.content.startsWith(prefix + "نشر")) {
        if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("⚠️|`انت لا تمتلك الرتبه المطلوبة`");  

  await  message.channel.send(`اكتب الكود  الان`)
    let filter = m => m.author.id === message.author.id
      var text = '';
        let sugsa = message.channel.awaitMessages(filter, { max: 1, time: 60000})
          .then(co => {
            text = co.first().content

              message.channel.send(`تم نشر الكود`)


     const welcomer =  member.guild.channels.find('name', 'أكواد-جافا-سكربت');
     if(!welcomer) return;
welcomer.send(`                             
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
${text} 
 
   =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- 
   
  تم النشر بواسطة :<@${message.author.id}>

@everyone | @here `)                              


              })
            }
          });





client.on('message',async message => {
let mention = message.mentions.members.first();
let acRoom = client.channels.get('474697535013781565');
if(message.content.startsWith(prefix + "رفض")) {
if(message.guild.id !== '473110787230269481') return;
if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
if(!mention) return message.reply("منشن شخص");

var embed = new Discord.RichEmbed()
.setTitle(':x:| تم رفض شخص')
.addField('» تم رفض', `${mention}`,true)
.addField('» بواسطة', `${message.author}`,true)
.setFooter(`© SBot. 2018`);
acRoom.send(embed);
}
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('474697535013781565');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '473110787230269481') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      var embed = new Discord.RichEmbed()
      .setTitle(':white_check_mark:| تم قبول شخص')
      .addField('» تم قبول', `${mention}`,true)
      .addField('» بواسطة', `${message.author}`,true)
      .setFooter(`© SBot. 2018`);
      acRoom.send(embed);
    });
  }
});

client.login(process.env.BOT_TOKEN);

