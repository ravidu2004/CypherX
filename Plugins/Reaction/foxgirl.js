const axios = require('axios');

module.exports = {
  command: ['foxgirl'],
  operate: async ({ Cypher, m, reply }) => {
    try {
      const { data } = await axios.get('https://nekos.life/api/v2/img/foxgirl');
      await Cypher.sendImageAsSticker(m.from, data.url, m, {
        packname: global.packname,
        author: global.author,
      });
    } catch (err) {
      console.error('Error fetching foxgirl:', err);
      reply('Failed to fetch foxgirl image. Please try again later.');
    }
  },
};