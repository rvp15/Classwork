const Meat = require("../models/meat");
const seed = require('../models/seed')
//Route:1, View:Index  Method:Get, Route:'/meats

const findAllMeats = (req, res) => {
  Meat.find({}, (err, foundMeats) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("meats/Index", { meats: foundMeats });
    }
  });
};

//Route:2, View:New ,Method:Get, path:meats/new(render New View to add new meat)
const showNewView = (req, res) => {
  res.render("meats/New");
};

//Route:3, Method:Post, path:meats/ (redirects to index page after creating)
const createNewMeat = (req, res) => {
  Meat.create(req.body, (err, createdMeat) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/meats");
    }
  });
};

//Route:4 ,Method:Get, path:meats/:id (render Show view)
const showOneMeat = (req, res) => {
  Meat.findById(req.params.id, (err, foundMeat) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("meats/Show", { meat: foundMeat });
    }
  });
};

//Route:5 ,Method:Get, path:meats/:id/edit (render Edit page/view)
const showEditView = (req, res) => {
  Meat.findById(req.params.id, (err, foundMeat) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("meats/Edit", { meat: foundMeat });
    }
  });
};

//Route:6,Method:Put, Path:'meats/:id (redirects to show view)
const updateOneMeat = (req, res) => {
  Meat.findByIdAndUpdate(req.params.id, req.body, (err, foundMeat) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect(`/meats/${req.params.id}`);
    }
  });
};

// seed
const seedMeatData = (req, res) => {
  // Delete all remaining documents (if there are any)

  Meat.deleteMany({}, (err, deletedMeats) => {
      if (err) {
          res.status(400).json(err)
      } else {
          console.log('deleted data.')
          console.log(seed.meats)
          // Data has been successfully deleted
          // Now use seed data to repopulate the database
          Meat.create(seed.meats, (err, createdMeat) => {
              if (err) {
                  res.status(400).json(err)
              } else {
                  res.status(200).redirect('/meats')
              }
          })
      }
  })
}
//Route:7,Method:Delete, Path:'meats/ (redirects Index view(main page))
const deleteOneMeat = (req, res) => {
  Meat.findByIdAndDelete(req.params.id, (err, deletedMeat) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/meats");
    }
  });
};

//Export all methods
module.exports = {
  findAllMeats,
  showNewView,
  createNewMeat,
  showOneMeat,
  showEditView,
  updateOneMeat,
  seedMeatData,
  deleteOneMeat,

};
