const express = require('express')
const router = express.Router()

const VideoController = require('../Controllers/VideoController')

router.get('/', VideoController.index)
router.get('/v2/get', VideoController.show)
router.post('/v2/post', VideoController.store)

module.exports = router