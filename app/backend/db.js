const mongoose = require('mongoose')

async function connectToDb() {
  try{
      const conn = await mongoose.connect(process.env.DB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: true,
          auth: {
              authSource: 'admin'
          },
          user: process.env.DB_USERNAME,
          pass: process.env.DB_PASSWORD
      })
      console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch(err) {
      console.log(err)
      process.exit(1)
  }
}

module.exports = { connectToDb }
