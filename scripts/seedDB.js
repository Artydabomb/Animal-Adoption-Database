const mongoose = require("mongoose");
const db = require("../server/database/models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/animal-db"
);

const userSeed = [
  {
    username: "The Dead Zone",
    password: "asdlkfjasd",
    email: "sdjkfalsjd@gmail.com",
    signup_date: "",
    saved_animals: [""]
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertOne(userSeed))
  .then(data => {
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });