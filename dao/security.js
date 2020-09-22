const axios = require('axios');
module.exports = {
   async getAttendance(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/security/attendance_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getSchedule(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/property/schedule_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
   async getMission(payload) {
      return await axios({
         url: 'https://hj-platform.dev.pin2wall.com/api/app/security/mission_list',
         method: 'post',
         data: payload
      }).then(res => {
         return res.data;
      }).catch(err => {
         console.log(err);
      });
   },
}