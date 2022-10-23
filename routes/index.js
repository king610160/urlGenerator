const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const generateURL = require('../utility/generateURL')
const PORT = 3000


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const inputUrl = req.body
  Url.findOne(inputUrl)
  .lean()
  .then(urlResult =>{
    if (!urlResult) {
      const urlCode = generateURL(5)
      Url.create({ url: inputUrl.url, newUrl: urlCode })
      return res.render('index', { url: inputUrl.url , newUrl:`https://localhost:${PORT}/${urlCode}`})
    } else {
      return res.render('index', { url: urlResult.url, newUrl: `https://localhost:${PORT}/${urlResult.newUrl}` })
    }
  })
  .catch(error => console.error(error))
})

router.get('/:urlId', (req, res) => {
  const { urlId } = req.params
  Url.findOne({ urlId })
    .then(urlResult => res.redirect(urlResult.url))
    .catch(error => console.error(error))
})


module.exports = router