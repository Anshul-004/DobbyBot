const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
  name: "joke",
  description: "Replies with a random joke",
  async execute(interaction) {
    try {
      // Send a "thinking" response while we fetch the quote
      await interaction.deferReply();

      // Fetch a random quote from the Quotable API
      const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
      const data = await response.json();

      if (data.error == false) {
        const joke = data.joke;

        const quoteEmbed = {
          color: 0x0099ff,
          description: joke,
          footer: {
            text: 'If the joke is inappropirate, please shove it up your ass.',
          },
        };

        // Reply with the quote embed
        await interaction.editReply({ embeds: [quoteEmbed] });
      } else {
        await interaction.editReply('Sorry, I couldn\'t fetch the joke at the moment. Please try again later.');
      }
    } catch (error) {
      console.error('Error fetching joke:', error);
      await interaction.editReply('An error occurred while fetching the joke. Please try again later.');
    }
  },
};