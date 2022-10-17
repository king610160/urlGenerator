const express = require('express')
const app = express()
const PORT = 3000
const exphbs = require('express-handlebars');

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})
app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`APP is running on https://localhost${PORT}`)
})