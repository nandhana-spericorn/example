var express = require('express');
var router = express.Router();
const authRoutes = require('../api/auth/index');

router.use('/auth', authRoutes);
module.exports = router;
