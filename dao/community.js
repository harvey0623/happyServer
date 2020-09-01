const axios = require('axios');
module.exports = {
   async getBulletin(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/announcement_list',
         method: 'post',
         data: payload
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
         data: payload
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
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   },
   async getCommunityList(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/community_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   },
   async addMember(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_doadd',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   },
   async saveMember(payload) {
      let result = await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_dosave',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
      return result;
   },
}