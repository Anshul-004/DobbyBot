require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');


//commands !!
const commands = [
  {
    name: 'info',
    description: 'Replies with basic bot information',
  },
  {
    name: 'ping',
    description: 'Replies with current bot ping',
  },
  {
    name: 'help',
    description: 'Replies with help, Dobby can do',
  }, 

];
// commands lie above here careful


const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Registering slash commands...');

    await rest.put(
      Routes.applicationCommands(
        process.env.CLIENT_ID,
        // process.env.GUILD_ID,
      ),
      { body: commands }
    );

    console.log('Slash commands were registered successfully!');
  } catch (error) {
    console.log(`There was an error: ${error}`);
  }
})();