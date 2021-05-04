const router = require('express').Router()
const blogController = require('../controllers/blogController')

router.get('/', blogController.getAllArticle)
router.get('/:articleID', blogController.getSingleArticle)
//router.get('/blog', blogController.getAllArticle)




module.exports = router