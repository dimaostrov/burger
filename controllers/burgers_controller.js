const db = require("../models");

exports.getAllBurgers = (req, res) => {
  db.burgers.findAll({}).then(x => res.json(x));
}

exports.postBurger = (req, res) => {
  db.burgers.create(req.body).then(x => res.json(x));
}