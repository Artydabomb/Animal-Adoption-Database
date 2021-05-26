const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const passport = require('./passport');
const app = express()
const PORT = 8080
const mongoose = require('mongoose')
// Route requires
const user = require('./routes/user')
const MongoStore = require('connect-mongo')

mongoose.connect ("mongodb://localhost:27017/animal-db" || process.env.mongodb_uri)

// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

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


// Routes
app.use('/user', user)

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
