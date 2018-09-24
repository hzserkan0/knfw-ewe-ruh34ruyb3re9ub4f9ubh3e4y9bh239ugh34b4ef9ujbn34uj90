const Discord = require('discord.js');
const client = new Discord.Client();
var gis = require('g-image-search');

exports.run = (client, message) => {
message.channel.send({embed: {
    color: 0xD97634,
    title: ":tada: TeenDevelopers - Yazılım Şirketi",
    url: "https://discord.gg/2rbDPN",
    description: "Yazılımsal gereksinimlerin sağlanmasında yardımcı oluyorlar.",
            }});
	message.channel.send({embed: {
    color: 0xD97634,
    title: ":ok_hand: TeenHost - Barındırma Şirketi",
    url: "https://discord.gg/2rbDPN",
    description: "Yüksek özellikli sunuculara sahipler ve discord botlarınızı bayağ ucuz fiyata barındırıyorlar.",
            }});

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'sponsor',
  description: 'sponsorları gösterir.',
  usage: 'sponsor'
};
