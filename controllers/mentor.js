const express = require('express')
const mentor = require('../models/mentor')
const student = require('../models/student')
const getAllMentors = async (req, res) => {
  const Mentor = await mentor.find()
  if (!Mentor) res.status(404).send('not found')
  res.json({ message: Mentor })
}

const mentorCreate = async (req, res) => {
  const { name, course } = req.body
  console.log(req.body)
  try {
    const Mentor = await mentor.create(req.body)
    Mentor.save()
    res.status(201).json({ message: 'Mentor created' })
  } catch (err) {
    console.log(err)
  }
}

const StudentListParticularMentor = async (req, res) => {
  const Mentor = await mentor.findById(req.params.id)
  let array = ''
  Mentor.students.forEach(async (ele) => {
    var st = await student.findById(ele)
    console.log(st.name)
  })
  res.json({ message: 'success' })
}
module.exports = { mentorCreate, getAllMentors, StudentListParticularMentor }
