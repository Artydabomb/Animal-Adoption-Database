const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const routes = require("./routes")
const app = express();
const PORT = process.env.PORT || 3001;
// const passport = require("passport")


// Define middleware here
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);
// app.use(passport.initialize());

//passport config
// require("./config/passport")(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/petAdoptionDB", { useNewUrlParser: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
