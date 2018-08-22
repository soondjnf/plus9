


const Discord = require('discord.js');
const Canvas = require('canvas');

const client = new Discord.Client();   
const fs = require("fs"); 
const moment = require("moment");  
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const jimp = require('jimp');  
 const pretty = require('pretty-ms') 
 
,ti={}  
,spee={};
       var prefix = "$" 



client.on('message', async message => {
  if(message.content.startsWith(prefix + "تقديم")) {
    var filter = s => s.author.id === message.author.id;
    var role;
    var why;
    var active;

    var what;
    var pay;
    var channel = client.channels.get('481528389916950539');
    message.channel.send('**اولا اكتب على اي رتبة تريد التقديم .. `ادارة , Helper , Seller`**').then(m => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 30000,
        errors: ['time']
      }).then(collected => {
        var content = collected.first().content;
        if(content !== 'Seller' && content !== 'Helper' && content !== 'ادارة') return message.reply('يجب عليك اختيار رتبة من الثلاثة المذكورين .');
        role = content;
        message.channel.send(`** ثانية لماذا تريد الرتبة ..\`${role}\`**`).then(m => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
          }).then(collected => {
            why = collected.first().content;
            message.channel.send(`**ثالثا هل ستكون متفاعل برتبتك؟ \`${role}\`**`).then(m => {
            message.channel.awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ['time']
            }).then(collected => {
              active = collected.first().content;
              if(role === 'Seller') {
                message.channel.send('**ما   ؟**').then(m => {
                  message.channel.awaitMessages(filter, {
                    max: 1,
                    time: 30000,
                    errors: ['time']
                  }).then(collected => {
                    what = collected.first().content;
                    message.channel.send('**ما هي طرق الدفع المتوفرة لديك؟**').then(m => {
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000,
                        errors: ['time']
                      }).then(collected => {
                        message.channel.send(':white_check_mark:| تم ارسال طلبك');
                        pay = collected.first().content;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username, message.author.avatarURL)
                        .setThumbnail(message.author.avatarURL)
                        .setTitle(`تم الطلب على رتبة \`${role}\``)
                        .addField('» تم الطلب بواسطة',message.author.tag,true)
                        .addField('» تم الطلب على رتبة', role,true)
                        .addField('» لماذا اراد الرتبة', why,true)
                        .addField('» هل سيكون متفاعل', active,true)
                        .addField('» الذي سيبيعه', what, true)
                        .addField('» طرق الدفع', pay,true)
                        .setFooter(`© SBot. 2018`);
                        channel.send(embed);
                      });
                    });
                  });
                });
              } else {
                message.channel.send(':white_check_mark:| تم ارسال طلبك');
                let embed = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setThumbnail(message.author.avatarURL)
                .addField('» تم  بواسطة',message.author.tag,true)
                .addField('»    اللغة البرمجية', role,true)
                .addField('»مدة ممارسة هذه اللغة', why,true)
                .setFooter(`» تم  بواسطة',message.author.tag`);
                channel.send(embed);
              }
            });
          });
        });
        });
      });
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

var embed = new Discord.RichEmbed()
.setTitle(':x: تم رفض شخص')
.addField(' تم رفض', `${mention}`,true)
.addField(' بواسطة', `${message.author}`,true);
acRoom.send(embed);
}
});

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
      var embed = new Discord.RichEmbed()
      .setTitle(':white_check_mark: تم قبول شخص')
      .addField(' تم قبول', `${mention}`,true)
      .addField(' بواسطة', `${message.author}`,true);
      acRoom.send(embed);
    });
  }
});
client.login(process.env.BOT_TOKEN);
