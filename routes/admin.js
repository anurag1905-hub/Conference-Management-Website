const express = require('express');
const router = express.Router();
const passport = require('passport');
const adminController = require('../controllers/adminController');

router.get('/home',passport.checkAuthentication,adminController.home);
router.get('/approve/:id',passport.checkAuthentication,adminController.approve);
router.get('/reject/:id',passport.checkAuthentication,adminController.reject);
router.get('/settings',passport.checkAuthentication,adminController.settings);
router.post('/addAdmin',passport.checkAuthentication,adminController.addAdmin);
router.get('/removeAdmin/:id',passport.checkAuthentication,adminController.removeAdmin);
router.get('/login-info',passport.checkAuthentication,adminController.loginInfo);

module.exports = router;