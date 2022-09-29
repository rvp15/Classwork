const Vegetable = require("../models/vegetable");
const seed = require('../models/seed')
//Index Route
const findAllVegetables = (req, res) => {
  Vegetable.find({}, (err, foundVegetable) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("vegetables/Index", { vegetables: foundVegetable });
    }
  });
};

//ShowNewView
const showNewView = (req, res) => {
  res.render("vegetables/New");
};

//CreatNew
const createNewVegetable = (req, res) => {
  Vegetable.create(req.body, (err, createdVegetable) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/vegetables");
    }
  });
};

//Show GET/vegetables/:id
const showOneVegetable = (req, res) => {
  Vegetable.findById(req.params.id, (err, foundVegetable) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("vegetables/Show", { vegetable: foundVegetable });
    }
  });
};

//Edit : GET/vegetables/:id/edit
const showEditView = (req, res) => {
  Vegetable.findById(req.params.id, (err, foundVegetable) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).render("vegetables/Edit", { vegetable: foundVegetable });
    }
  });
};

//Update : PUT/vegetables/:id
const updateOneVegetable = (req, res) => {
  Vegetable.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err, foundVegetable) => {
      if (err) {
        res.status(400).json(err);
      } else {
        res.status(200).redirect(`/vegetables/${req.params.id}`);
      }
    }
  );
};
// seed vegetable data
const seedVegetable = (req, res) => {
  Vegetable.deleteMany({}, (err, deletedVegetables) => {
      if (err) {
          res.status(400).json(err)
      } else {
          Vegetable.create(seed.vegetables, (err, createdVegetables) => {
              if (err) {
                  res.status(400).json(err)
              } else {
                  res.status(200).redirect('/vegetables')
              }
          })
      }
  })
}
//Delete : DELETE/vegetables/:id
const deleteOneVegetable = (req, res) => {
  Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(200).redirect("/vegetables");
    }
  });
};

module.exports = {
  findAllVegetables,
  showNewView,
  createNewVegetable,
  showOneVegetable,
  showEditView,
  updateOneVegetable,
  seedVegetable,
  deleteOneVegetable,
};
