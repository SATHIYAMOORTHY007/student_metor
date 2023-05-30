const express = require('express')
const router = express.Router()
const {
  mentorCreate,
  getAllMentors,
  StudentListParticularMentor,
} = require('../controllers/mentor')

router.get('/', getAllMentors)
router.post('/create', mentorCreate)
router.get('/student/particular/mentor/:id', StudentListParticularMentor)

module.exports = router
