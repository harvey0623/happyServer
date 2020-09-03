const express = require('express');
const router = express.Router();
const securityDao = require('../../dao/security');

router.post('/attendance_list', async (req, res) => {
   let result = await securityDao.getAttendance(req.body).then(res => res);
   res.json(result);
});

router.post('/schedule_list', async (req, res) => {
   let result = await securityDao.getSchedule(req.body).then(res => res);
   res.json(result);
});


module.exports = router;