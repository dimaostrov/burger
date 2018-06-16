const db = require("../models");

exports.getAllBurgers = (req, res) => {
  db.burgers.findAll({}).then(x => res.json(x));
}

exports.postBurger = (req, res) => {
  db.burgers.create(req.body).then(x => res.json(x));
}

exports.devourBurger = (req,res) => {
  db.burgers.update({devoured: true}, {where: {id: req.params.id}})
    .then(x=>res.json(x));
}