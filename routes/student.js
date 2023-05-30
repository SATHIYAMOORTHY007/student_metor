const express = require('express')
const router = express.Router()
const { studentCreate, getAllStudent } = require('../controllers/student')

router.get('/', getAllStudent)
router.post('/create', studentCreate)

module.exports = router
