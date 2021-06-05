const db = require("../server/database/models/user");

module.exports = {
<<<<<<< HEAD
  findAll: function (req, res) {
    //if (req.query.)
    axios
      .get(
        //`https://....(sku=${req.params.id})?format=json&apiKey=${process.env.REACT_APP_API_KEY_PETAPI}`
      )
      .then(results => { res.json.data.user[0] })
      .catch(err => console.log(err));
  },

  // db.User
  // .find(req.query)
  // .sort({ date: -1 })
  // .then(dbModel => res.json(dbModel))
  // .catch(err => res.status(422).json(err));
  // },
  findById: function (req, res) {
    axios
      .get(
        //`https://....(sku=${req.params.id})?format=json&apiKey=${process.env.REACT_APP_API_KEY_PETAPI}`
      )
      .then(results => { res.json.data.user[0] })
      .catch(err => console.log(err));
  },
  create: function (req, res) {
=======
  findAll: function(req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
>>>>>>> 4377a7278a34b158ac354072d33c999f14c69982
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD
  update: function (req, res) {
=======
  updateArray: function(req, res) {
    db.User
      .findOneAndUpdate( { _id: req.params.id }, { $push: {saved_animals}}, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
>>>>>>> 4377a7278a34b158ac354072d33c999f14c69982
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
<<<<<<< HEAD
  remove: function (req, res) {
=======
  remove: function(req, res) {
>>>>>>> 4377a7278a34b158ac354072d33c999f14c69982
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
