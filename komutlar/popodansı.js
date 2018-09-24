const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"https://i.pinimg.com/originals/2c/be/16/2cbe16eeef51a9a3adba68acef2ac7e1.gif",
          color: 0xD97634,
		  description: "**:peach: twerk vakti !**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['p'],
  permLevel: 0
};

exports.help = {
  name: 'twerk',
  description: 'kedileri gösterir.',
  usage: 'twerk'
};
