const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-handlebars')
const generatePassword = require('./generate-password')
const password = generatePassword()
require('./config/mongoose')

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', { password: password, options: options })
})

app.listen(PORT, () => {
  console.log(`APP is running on https://localhost${PORT}`)
})

const FB = "https://facebook.com"
let newurl = `https://outoftheworld.com/${password}`

console.log(newurl)
