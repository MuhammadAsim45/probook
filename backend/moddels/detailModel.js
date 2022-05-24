const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    firstName: {
        type: String,
        
    },
    Lastname: {
        type: String,
        
    },
 DOB:{
     type:String,
     required:true

 },
 AdressLine1:{
     type:String

 },
 AdressLine2:{
     type:String
 },
Zipcode:{
    type:Number,
    unique:true

},
city:{
    type:String
},


Country:{
    type:String
},
Gender:{
  type:String,
  enum:["male","female"]  
},
department:{
type:String
},
position:{
    type:String
},
workEmail:{
    type:String
},
companyType:{
type:String,
},
CNIC:{
    type:String
},
companyName:{
    type:String,
},
mobile:{
    type:String,
    unique:true
}

})

module.exports = mongoose.model('Detail', userSchema , "Detail")
