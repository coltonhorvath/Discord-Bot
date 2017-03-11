const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('The bot is online.')
});

client.on('message', message => {
    if(message.content === '^test'){
        message.reply('test');
    }
});

client.on('message', message => {
    if(message.content === '^start'){
        var xp;
        function begin() {
            xp = setInterval(farm, 125000);
        }
        function farm() {
            message.channel.send('farm');
        }
        begin();
        farm();
    }
});

client.login('INSERT ID HERE');
