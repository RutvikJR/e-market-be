const express = require('express');
const router = express();

router.use('/user', require('./api/user'));

module.exports = router;
