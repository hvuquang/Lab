const postController = require('../controllers/postController')
const router = require('express').Router()
const upload = require('../controllers/upload')

router.get('/get',postController.get)
router.post('/add',upload.single('image'),postController.add)

module.exports = router