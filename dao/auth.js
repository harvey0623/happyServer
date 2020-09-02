const axios = require('axios');
module.exports = {
   async login(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/app/doLoginApp',
         method: 'post',
         data: {
            vAccount: payload.vAccount,
            vPassword: payload.vPassword
         }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async register(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/app/doRegisterApp',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   }
}