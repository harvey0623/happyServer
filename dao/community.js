const axios = require('axios');
module.exports = {
   async getBulletin(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/announcement_list',
         method: 'post',
         data: {
            iUserId: payload.iUserId,
            vToken : payload.vToken,
            iCommunityId: payload.iCommunityId
         }
      }).then(res => {
         res.data.aaData.forEach(item => { 
            let imgUrl = item.iPosition === 1 ? '1000x150' : '120x120';
            item.vImage = `https://fakeimg.pl/${imgUrl}`;
         })
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   },
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
   },
   async getMemberDetail(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_detail',
         method: 'post',
         data: {
            iUserId: payload.iUserId,
            vToken : payload.vToken,
            vAccount: payload.vAccount
         }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   },
}