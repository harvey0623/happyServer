const express = require('express');
const router = express.Router();
const authDao = require('../../dao/auth');

router.post('/login', async (req, res) => {
   let result = await authDao.login(req.body).then(res => res);
   res.json(result);
});

router.post('/register', async (req, res) => {
   let result = await authDao.register(req.body).then(res => res);
   res.json(result);
});

router.post('/app/sendSMS', async (req, res) => {
   let result = await authDao.sendSMS(req.body).then(res => res);
   res.json(result);
});

router.post('/app/checkCode', async (req, res) => {
   let result = await authDao.checkCode(req.body).then(res => res);
   res.json(result);
});

module.exports = router;