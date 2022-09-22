const express = require("express")
const router = express.Router()
const fruit = require('../models/fruit')

///////////////Routes////////////////////
////home
router.get('/', (req, res) => {
    res.send(fruit)
})
////index
router.get('/:index', (req, res) => {
    res.send(fruit[req.params.index])
})


module.exports = router