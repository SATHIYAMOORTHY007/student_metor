const express = require('express')
const student = require('../models/student')

const getAllStudent = async (req, res) => {
  const Student = await student.find()
  if (!Student) res.status(404).send('no students')
  res.json({ message: Student })
}

const studentCreate = async (req, res) => {
  const { name, course } = req.body
  try {
    const Student = await student.create(req.body)
    Student.save()
    res.status(201).json({ message: 'student created' })
  } catch (err) {
    console.log(err)
  }
}

module.exports = { studentCreate, getAllStudent }
