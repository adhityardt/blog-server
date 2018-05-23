const express = require ('express')
const router = express.Router()

const { articleSave,articleList } = require ('../controllers/article.controller')

router.get('/', articleList)
router.post('/', articleSave)
// router.put('/:id', updateArticleById)
// router.delete('/:id', deleteArticleById)

module.exports = router;