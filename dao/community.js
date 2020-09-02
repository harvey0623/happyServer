const axios = require('axios');
module.exports = {
   async getBulletin(payload) {
      return await axios({
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
   },
   async getNotify(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/notify_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getMemberDetail(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_detail',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getCommunityList(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/community_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async addMember(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_doadd',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async saveMember(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_dosave',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async deleteMember(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/community/member_dodel',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}