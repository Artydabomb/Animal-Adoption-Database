const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('./server/passport');
const app = express()
const PORT = process.env.PORT || 8080;
const mongoose = require('mongoose')
const dotenv = require('dotenv').config();
// Route requires
const routes = require('./server/routes');
const MongoStore = require('connect-mongo')

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/animal-db", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
// We don't know what this does lol
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sessions
app.use(
	 session({
		secret: 'bananna-pancakes', //pick a random string to make the hash that is generated secure
		store: MongoStore.create({
            mongoUrl: "mongodb://localhost:27017/animal-db"
        }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
  }

// Routes
app.use('/', routes)

// Starting Server 
app.listen(PORT, () => {
	console.log(`Server listening on PORT: ${PORT}`)
})
