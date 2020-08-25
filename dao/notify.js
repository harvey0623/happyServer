const axios = require('axios');
module.exports = {
   async getNotify(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/notify_list',
         method: 'post',
         data: {
            iUserId: payload.iUserId,
            vToken : payload.vToken,
            iCommunityId: payload.iCommunityId,
            iCategory: payload.iCategory
         }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   }
}