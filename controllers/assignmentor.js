const express = require('express')
const mentor = require('../models/mentor')
const student = require('../models/student')
const { mongoose } = require('mongoose')

const mentorAssaginToStudent = async (req, res) => {
  try {
    const Mentor = await mentor.findById(req.body.mentor_id)
    Mentor.students = [...Mentor.students, ...req.body.students_id]
    Mentor.save()

    req.body.students_id.forEach(async (element) => {
      const temp = await student.findById(element)
      temp.assignedmentor = req.body.mentor_id
      temp.save()
      res.status(201).json({ message: 'assigned successfully' })
    })
  } catch (err) {
    console.log(err)
  }
}

const modifyMentor = async (req, res) => {
  try {
    const Student = await student.findById(req.body.student_id)
    let oldmentorid = Student.assignedmentor

    if (Student.previousMentor !== oldmentorid) {
      Student.previousMentor = oldmentorid
    }
    Student.assignedmentor = [req.body.mentor_id] //student database mentor id changed
    Student.save()
    //change oldmentor database
    const oldmentor = await mentor.findById(oldmentorid)

    if (oldmentor.students.length < 0 || oldmentor.students === null) {
      console.log('empty ')
    } else {
      let newAssigned = oldmentor.students
      const indexpos = newAssigned.indexOf(
        new mongoose.Types.ObjectId(req.body.student_id),
      )

      newAssigned = oldmentor.students.splice(1, 1)

      oldmentor.students = [...newAssigned]

      oldmentor.save()

      //update newmentor
      const newmentor = await mentor.findById(req.body.mentor_id)
      newmentor.students = [...newmentor.students, req.body.student_id]
      newmentor.save()
    }
    res.json({ message: 'success' })
  } catch (error) {
    console.log(error)
  }
}

const StudentPreviosMentor = async (req, res) => {
  const Student = await student.findById({ _id: req.params.id })

  const pre = Student.previousMentor

  let mentorname = await mentor.findById(pre)

  res.json({ message: mentorname.name })
}
module.exports = { mentorAssaginToStudent, modifyMentor, StudentPreviosMentor }
