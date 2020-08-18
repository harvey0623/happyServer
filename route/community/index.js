const express = require('express');
const router = express.Router();
const communityDao = require('../../dao/community');

router.post('/bulletin', async (req, res) => {
   let result = await communityDao.bulletin().then(res => res);
   res.json(result);
});

module.exports = router;