const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    previousMentor: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'mentor',
    },
    assignedmentor: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
      ref: 'mentor',
    },
  },
  { timestamps: true },
)

module.exports = mongoose.model('student', studentSchema)
