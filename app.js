const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes/index')
const bodyParser = require('body-parser')
require('./config/mongoose')
const app = express()
const PORT = 3000

const generateURL = require('./utility/generateURL')
const reURL = generateURL()

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => {
  console.log(`APP is running on https://localhost${PORT}`)
})

