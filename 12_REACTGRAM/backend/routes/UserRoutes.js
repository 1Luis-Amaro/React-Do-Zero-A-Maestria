const express = require("express")
const router = express.Router()

const {register} = require("../controllers/UseController")

//Routes
router.post("/register", register)

module.exports = router

