const url = require('../url')
const db = require('../../config/mongoose')

db.once('open', () => {
  url.create({
    url: 'https://facebook.com',
    newUrl: 'aB965'
  })
  console.log('Seeder is ready.')
})

