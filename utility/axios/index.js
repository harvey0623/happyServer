const axios = require('axios');
const happyAxios = axios.create({
   baseURL: process.env.BASE_URL,
});


module.exports = happyAxios;