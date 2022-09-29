const express = require("express");
const router = express.Router();
const Meat = require("../models/meat");

//seed
const seed = require('../models/seed')
//Bring in controller functions(destructure methods)
const {
  findAllMeats,
  showNewView,
  createNewMeat,
  showOneMeat,
  showEditView,
  updateOneMeat,
  seedMeatData,
  deleteOneMeat,
} = require("../controllers/meatController");
//Setup Meat Route
//I.N.D.U.S.E -Index,New,Delete,Update,Create,Show,Edit

//Index Route
router.get("/", findAllMeats);

//New Route
router.get("/new", showNewView);

//Delete  Route
router.delete("/:id", deleteOneMeat);

//Update Route
router.put("/:id", updateOneMeat);

//Create Route
router.post("/", createNewMeat);

//Edit Route
router.get("/:id/edit", showEditView);

//Show Route
router.get("/:id", showOneMeat);

// Setup "seed" route
router.get('/seed', seedMeatData)

module.exports = router;
