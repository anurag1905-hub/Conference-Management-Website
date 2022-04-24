const express = require('express');
const router = express.Router();
const passport = require('passport');

const conferenceController = require('../controllers/conferenceController');

router.get('/createConference',passport.checkAuthentication,conferenceController.createConference);


module.exports = router;