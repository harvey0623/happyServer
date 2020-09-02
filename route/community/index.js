const express = require('express');
const router = express.Router();
const communityDao = require('../../dao/community');

router.post('/announcement_list', async (req, res) => {
   let result = await communityDao.getBulletin(req.body).then(res => res);
   res.json(result);
});

router.post('/notify_list', async (req, res) => {
   let result = await communityDao.getNotify(req.body).then(res => res);
   res.json(result);
});

router.post('/member_detail', async (req, res) => {
   let result = await communityDao.getMemberDetail(req.body).then(res => res);
   res.json(result);
});

router.post('/community_list', async (req, res) => {
   let result = await communityDao.getCommunityList(req.body).then(res => res);
   res.json(result);
});

router.post('/member_doadd', async (req, res) => {
   let result = await communityDao.addMember(req.body).then(res => res);
   res.json(result);
});

router.post('/member_dosave', async (req, res) => {
   let result = await communityDao.saveMember(req.body).then(res => res);
   res.json(result);
});

router.post('/member_dodel', async (req, res) => {
   let result = await communityDao.deleteMember(req.body).then(res => res);
   res.json(result);
});

module.exports = router;