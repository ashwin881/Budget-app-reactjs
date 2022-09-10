const mongoose = require('mongoose')
const connectDB = async ()=>{
  mongoose.connect('mongodb://localhost:27017/mydb',{useNewUrlParser:true,useUnifiedTopology:true},
  err => {
      if (!err)
          console.log('Mongodb connection succeeded.')
      else
          console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
  })
}



module.exports = connectDB;