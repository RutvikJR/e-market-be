"use strict";

var express = require("express");
var controller = require("./controller.js");
var auth = require("../../auth/auth.service");
var router = express.Router();

router.post('/create', auth.checkAdminAuth, controller.create);
router.post('/getList', auth.checkAdminAuth, controller.index);
router.post('/getById', auth.checkAdminAuth, controller.getById);
router.post('/update', auth.checkAdminAuth, controller.update);
router.post('/remove', auth.checkAdminAuth, controller.remove);

router.post('/getCurrency', controller.index);

module.exports = router;