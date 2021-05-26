const db = require("../models");
const axios = require("axios");


module.exports = {
  findAll: function(req, res) {
    if (req.query.q === "") {
      req.query.q = "iphone";
    }
    axios
      .get(

      .then(results => {

      })
      .catch(err => console.log(err));
  },
  findByClass: function(req, res) {

    axios
      .get(
      .then(results => {

      })
      .catch(err => console.log(err));
  },
  findById: function(req, res) {
    axios
      .get(

      )
      .then(results => {

      })
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    //animal?
    db.Animal.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Animal.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Animal.findOne({ sku: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};