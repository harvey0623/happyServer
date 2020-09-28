const happyAxios = require('../utility/axios/index.js');
module.exports = {
   async login(payload) {
      return await happyAxios({
         url: '/app/doLoginApp',
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
      return await happyAxios({
         url: '/app/doRegisterApp',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async sendSMS(payload) {
      return await happyAxios({
         url: '/app/sendSMS',
         method: 'get',
         params: {
            ...payload
         }
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async checkCode(payload) {
      return await happyAxios({
         url: '/app/checkCode',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async newPassword(payload) {
      return await happyAxios({
         url: '/app/newPassword',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}