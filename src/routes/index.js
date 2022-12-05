const express = require("express");
const router = express.Router();

// import validation
const validations = require("../validations");

// import controllers
const controllers = require("../controllers");

// main router
router.post("/chat", validations.chat, controllers.chat);
router.post("/result", validations.result, controllers.result);

module.exports = router;
