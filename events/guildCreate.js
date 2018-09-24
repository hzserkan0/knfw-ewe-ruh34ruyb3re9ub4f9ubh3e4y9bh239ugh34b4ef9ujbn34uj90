const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  'Botumuz BETA versiyonundadır, geliştirilmeye ve sorunları gidermeye devam ediyoruz !',
   'Bot üzerinde bulunan BUG ve hataları https://discord.gg/hQZTxnj sunucusundan bildirenlere, belirli ödüller verilecektir.',
 

]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
