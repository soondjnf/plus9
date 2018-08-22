const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "#";
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', async message => {
var prefix = "#";
  if(message.content.startsWith(prefix + "تقديم")) {
    await message.channel.send("**:writing_hand: ارسل اللغة البرمجة الآن **").then(e => {
    let filter = m => m.author.id === message.author.id
    let lan = '';
    let md = '';
    let br = '';
    let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
    .then(collected => {
      lan = collected.first().content
      collected.first().delete()
e.edit(`**:ارسل مدة خبرتك الان**`)
let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
.then(co => {
  md = co.first().content
        co.first().delete()
        e.edit(`**ارسل م تعرف بهذه اللغة الان**`)
let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })//By Codes , - ST I EdiTeD , .#4968//By Codes , - ST I EdiTeD , .#4968
.then(col => {
  br = col.first().content
        col.first().delete()
e.edit("**جاري التقديم علي طلبك...**").then(b => {
        setTimeout(() => {
  b.edit(`**تم التقديم وسيتم الرد فـ اقرب وقت**`)
        },2000);
  var star = client.channels.get('481528389916950539')

if(!star) return;
if(star) {
star.send({embed : new Discord.RichEmbed()
.setDescription(`**اللغة البرمجية : \n ${lan}\n مدة ممارسة هذه اللغة :\n ${md} \nالخبرة  :\n ${br}  **`)  
          .setFooter(`star code.`)
.setTimestamp()
});
}        
})
})
})
})
})
 }
 
   client.on('message',async message => {
  let mention = message.mentions.members.first();
  let role = message.content.split(" ").slice(2).join(" ");
  let mySupport = message.guild.roles.find('name',role);
  let acRoom = client.channels.get('481528389916950539');
  if(message.content.startsWith(prefix + "قبول")) {
    if(message.guild.id !== '477397483904040995') return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
    if(!mention) return message.reply('منشن شخص');
    if(!role) return message.reply('ادخل اسم رتبة');
    if(!mySupport) return message.reply('هذه الرتبة غير موجودة');
    if(mention.roles.has(mySupport)) return message.reply('هذا الشخص معه الرتبة مسبقا');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**[ ${mySupport} ] واعطائك رتبة ${mention} تم بنجاح قبولك**`);
    });
  }
});
  
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let acRoom = client.channels.get('481528389916950539');
  if(message.content.startsWith(prefix + "رفض")) {
  if(message.guild.id !== '477397483904040995') return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return;
  if(!mention) return message.reply("منشن شخص");

  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});

client.login(process.env.BOT_TOKEN);

