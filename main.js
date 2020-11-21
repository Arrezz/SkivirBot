const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

let token = ''

fs.readFile('secret.txt', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    token = data;
});

client.once('ready', () => {
    console.log('Woo boy we starting');
});

client.login(token)