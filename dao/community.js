const axios = require('axios');
module.exports = {
   async bulletin(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/announcement_list',
         method: 'post',
         data: {
            iUserId: '1154617871',
            vToken : '47d7b5bae4ad5d4ebf6ca8bd3aa1d34422f7626586d7993eb4bbbe84a0966d35',
            iCommunityId: 5
         }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   }
}