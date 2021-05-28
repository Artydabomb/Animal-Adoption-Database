const db = require("../server/database/models/user");
const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        //if (req.query.)
        axios
        .get(
            //`https://....(sku=${req.params.id})?format=json&apiKey=${process.env.REACT_APP_API_KEY_PETAPI}`
            )
        .then(results => {res.json.data.user[0]})
        .catch(err => console.log(err));
    },
      
       // db.User
       // .find(req.query)
       // .sort({ date: -1 })
       // .then(dbModel => res.json(dbModel))
       // .catch(err => res.status(422).json(err));
   // },
    findById: function(req, res) {
        axios
        .get(
            //`https://....(sku=${req.params.id})?format=json&apiKey=${process.env.REACT_APP_API_KEY_PETAPI}`
            )
        .then(results => {res.json.data.user[0]})
        .catch(err => console.log(err));
    },
    create: function(req, res) {
      db.User
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    remove: function(req, res) {
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
  };
  