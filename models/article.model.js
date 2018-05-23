const mongoose = require('mongoose')
const Schema = mongoose.Schema

let articleSchema = mongoose.Schema({
  author: String,
  title: String,
  content: String,
  authorId: String
}, {
		timestamps: true
	})

let article = mongoose.model('Article', articleSchema)

module.exports = article