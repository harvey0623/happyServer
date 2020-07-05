const axios = require('axios');
module.exports = {
   async login(payload) {
      let result = await axios({
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
      return result;
   }
}