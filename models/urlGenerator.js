const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlGeneratorSchema = new Schema({
  website: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },
  newwebsite: {
    type: String,
  }
})
module.exports = mongoose.model('urlGenerator', urlGeneratorSchema)