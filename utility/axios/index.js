const axios = require('axios');
const happyAxios = axios.create({
   baseURL: 'https://hj-platform.dev.pin2wall.com',
});


module.exports = happyAxios;