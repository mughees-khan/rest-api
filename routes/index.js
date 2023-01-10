const express = require("express");
const router = express.Router();

//router.use('/chat',require('./chat.js'))
router.use("./product", require("./product.js"));

module.exports = router;
