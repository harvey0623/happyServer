const express = require('express');
const router = express.Router();
const authDao = require('../../dao/auth');

router.post('/login', async (req, res) => {
   let result = await authDao.login(req.body).then(res => res);
   res.json(result);
});

module.exports = router;