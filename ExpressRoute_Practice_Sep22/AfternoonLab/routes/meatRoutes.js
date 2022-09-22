const express = require("express")
const router = express.Router()
const meat = require('../models/meat')

///////////////Routes////////////////////
////home
router.get('/', (req, res) => {
    res.send(meat)
})
////index
router.get('/:index', (req, res) => {
    res.send(meat[req.params.index])
})


module.exports = router