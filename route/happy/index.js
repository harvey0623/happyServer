const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/login', async (req, res) => {
   console.log(process.env.NAME)
   let result = await axios({
      url: 'https://hj-platform.dev.pin2wall.com/app/doLoginApp',
      method: 'post',
      data: {
         vAccount: "0986104667",
	      vPassword: "abc123"
      }
   }).then(res => res);
   console.log(result.data);
   res.json({
      status: true
   })
});

router.get('/test', (req, res) => {
   res.json({
      status: true
   })
});

module.exports = router;