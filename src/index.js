require('dotenv').config();

const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
    IntentsBitField.Flags.GuildMessageReactions,
    IntentsBitField.Flags.GuildEmojisAndStickers,
  ],
});
// on hone ke baad , console log krega, sirf console.
client.on('ready', (c) => {
  console.log(`✅ ${c.user.tag} is online.`);
});


// bot won't trigger itself, return here just returns
client.on('messageCreate', (message) => {
  // console.log(message.content) logs message in console.

  
  //if author is bot, reply nhi dega ye
  if (message.author.bot) {
    return;
  }

  if (message.content === 'hello') {
    message.reply('hi');
  }

  if (message.content == 'hi') {
    message.reply('hello');
  }

  if (message.content == 'yo'){
    message.reply('to kaise hai aap log');
  }
  
  if (message.content == 'DOBBY SUPPORTS SLASH COMMANDS !'){
    message.reply('YESSSSSSSSSSSSS!');
  }
});
  
//interaction with slash commands

client.on('interactionCreate', (interaction) =>{

  if(!interaction.isChatInputCommand()) return;

  if(interaction.commandName === 'info') {
    interaction.reply('Hi, This bot was created by user : An5HuL#9311 .\nThis is a fun experimental bot, and may be risky at times if not used wisely !');
  }

  if(interaction.commandName === 'ping') {
    interaction.reply('1ms');
  }

  if(interaction.commandName === 'help') {
    interaction.reply('Dobby is always present in service of master! \n all the commands are listed with required descriptions, also there are many easter eggs involved...');
  }

});

client.login(process.env.TOKEN);