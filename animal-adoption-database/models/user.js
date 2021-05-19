const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: "Username is Required"
  },

  password: {
    type: String,
    required: "Password is Required"
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  signup_date: {
    type: Date,
    default: Date.now
  },

  saved_animals: {
    type: Array
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;