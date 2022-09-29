// Load express
const express = require('express')
const methodOverride = require('method-override')

// Bring in mongoConfig function
const mongoConfig = require('./config')
require('dotenv').config()
// Creates our express app (object)
const app = express()

// Bring in our packaged routes
const fruitRoutes = require('./routes/fruitRoutes')
const meatRoutes = require('./routes/meatRoutes')
const vegetableRoutes = require('./routes/vegetableRoutes')
// Identify our port
const port = process.env.PORT

// setup our view engine
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

// Middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(methodOverride("_method"))
app.use(express.json())

app.use('/fruits', fruitRoutes)
app.use('/meats',meatRoutes)
app.use('/vegetables', vegetableRoutes)

// Listen to port
app.listen(port, () => console.log('Listening on port: ', port))

// Connect to DB
mongoConfig()




