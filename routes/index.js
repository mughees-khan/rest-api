const express = require("express");
const router = express.Router();

//router.use('/chat',require('./chat.js'))
router.use("./rides", require("./rides.js"));

module.exports = router;
