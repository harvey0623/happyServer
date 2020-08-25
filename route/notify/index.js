const express = require('express');
const router = express.Router();
const notifyDao = require('../../dao/notify.js');

router.post('/', async (req, res) => {
   let result = await notifyDao.getNotify(req.body).then(res => res);
   console.log(result);
   res.json(result);
});

module.exports = router;