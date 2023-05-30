const mongoose = require('mongoose')
const mentorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        default: null,
      },
    ],
  },
  { timestamps: true },
)

module.exports = mongoose.model('mentor', mentorSchema)
