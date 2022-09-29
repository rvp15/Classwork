const express = require('express')
const router = express.Router()
const Vegetable = require('../models/vegetable')

//seed
const seed = require('../models/seed')
//Bring in controller functions
const{
    findAllVegetables,
    showNewView,
    createNewVegetable,
    showOneVegetable,
    showEditView,
    updateOneVegetable,
    seedVegetable,
    deleteOneVegetable
} = require('../controllers/vegetableController')
//Setup Meat Route
//I.N.D.U.S.E -Index,New,Delete,Update,Create,Show,Edit

 //Index Route
router.get('/',findAllVegetables)

//New Route
router.get('/new',showNewView)

//Delete  Route
router.delete('/:id',deleteOneVegetable)

//Update Route
router.put('/:id',updateOneVegetable)

//Create Route
router.post('/',createNewVegetable)

//Edit Route
router.get('/:id/edit', showEditView)

//Show Route
router.get('/:id', showOneVegetable)

// Setup "seed" route
router.get('/seed', seedVegetable)


module.exports = router
