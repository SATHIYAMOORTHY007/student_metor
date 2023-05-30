const express = require('express')
const router = express.Router()
const {
  mentorAssaginToStudent,
  modifyMentor,
  StudentPreviosMentor,
} = require('../controllers/assignmentor')

router.post('/', mentorAssaginToStudent)
router.post('/modifyMentor', modifyMentor)
router.get('/previousmentor/:id', StudentPreviosMentor)

module.exports = router
