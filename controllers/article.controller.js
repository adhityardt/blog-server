const Articles = require('../models/article.model.js')

const mongoose = require('mongoose')

module.exports = {
  articleSave (req,res) {
    if (req.body.author == null) {
      res.json({
        message: 'You should fill the author'
      })
    } else if (req.body.content == null){
      res.json({
        message: 'You should fill the content'
      })
    } else if (req.body.title == null){
      res.json({
        message: 'You should fill the title'
      })
    } else {
      Articles
      .create ({
        author: req.body.author,
        content: req.body.content,
        title: req.body.title,
        authorId: req.body.authorId
      })
      .then(function (result) {
        res.status(200).json({
          message: "success add a new article",
          result: result
        })
      })
      .catch(function (err) {
        res.status(400).json({
          message: 'error when creating a new article',
          error: err
        })
      })
    }
  },
  articleList (req,res) {
    Articles.find({})
    .then(result => {
      res.status(200).json ({
        message: 'Success get all articles',
        result
      })
    })
    .catch(err => {
      res.status(error.status).json({
        error
      })
    })
  },
  // updateArticleById (req,res) {

  // },
  // deleteArticleById (req,res) {

  // }

}