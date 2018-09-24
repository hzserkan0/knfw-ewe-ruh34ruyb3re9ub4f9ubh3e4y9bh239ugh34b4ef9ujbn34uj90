const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
	message.channel.send({embed: {
            color: 0xD97634,
            author: {
              name: "",
            },
			    "thumbnail": {
				 "url": "https://i.hizliresim.com/EyyG8z.png"
			},
            title: "HOZ BOT Komutlar",
            url: "http://serkanmemis.com.tr.ht",
            fields: [
				{
                name: "Genel Komutlar",
				inline: true,
                value: ";**report**\n;**yardım**\n;**değişiklikler**\n;**istatistik**\n;**sunucubilgi**\n;**davet**\n;**seviye-sistemi**\n;**ailemiz**\n;**yaratıcı**"
			  },
				{
                name: "Mod komutları",
				inline: true,
                value: ";**temizle**\n;**ban**\n;**duyuruyap**\n;**uyar**\n;**kick**",
              },
			  {
                name: "Eğlenceli Komutlar",
				inline: true,
                value: ";**kedi**\n;**köpek**\n;**coolresim**\n;**köpekadı**\n;**kediadı**\n;**randomşifre**\n;**mcödül**\n;**twerk**\n;**sins-aga**"
              },
              {
                name: "Kullanıcı Komutları",
				inline: true,
                value: ";**kullanıcıbilgim**\n;**avatarım**\n;**ping**"
              },
              {
                name: "Güncel Sürüm",
                value: "v2.3 BETA"
              }
            ],
            timestamp: new Date(),
            footer: {
              text: "©2018 Kusursuz bir bot"
            }
          }
        });  
	    message.react("👍")
}};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
