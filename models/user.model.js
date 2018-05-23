const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = mongoose.Schema({
	fullname: String,
	username: String,
	password: String
}, {
		timestamps: true
	})

let user = mongoose.model('User', userSchema)

module.exports = user