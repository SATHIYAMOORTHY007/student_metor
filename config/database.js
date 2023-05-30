const mongoose = require('mongoose')
const schema = mongoose.Schema
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.Mongodb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    console.log('DB Connected')
  } catch (e) {
    console.log(e.message, 'error in connecting db')
  }
}

module.exports = dbConnect
