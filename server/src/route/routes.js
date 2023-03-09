const express = require("express")
const promptController = require("../controllers/prompt-controller")

const route = express.Router()

route.post("/api/prompt", promptController.sendText)

module.exports = route