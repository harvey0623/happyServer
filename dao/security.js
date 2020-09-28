const happyAxios = require('../utility/axios/index.js');
module.exports = {
   async uploadAttendance(payload) {
      return await happyAxios({
         url: '/api/app/security/upload/attendance',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getAttendance(payload) {
      return await happyAxios({
         url: '/api/app/security/attendance_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getSchedule(payload) {
      return await happyAxios({
         url: '/api/app/property/schedule_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getMission(payload) {
      return await happyAxios({
         url: '/api/app/security/mission_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async uploadMission(payload) {
      return await happyAxios({
         url: '/api/app/security/upload/mission',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}