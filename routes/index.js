const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeController');

router.get('/',homeController.home);
router.get('/contact',homeController.contact);
router.use('/users',require('./users'));
router.use('/admin',require('./admin'));

module.exports = router;