
const client = new Discord.Client();

client.on('ready', () => {
  console.log('ik kan hoor!');
});

client.on('message', message => {
  if (message.content === '*ping') {
    message.reply('Pong!');

  }
});

client.login('BOT_TOKEN');

