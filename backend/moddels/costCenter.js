const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    costCenter:{
        type:String,
        required:true
    },
    costName:{
        type:String,
        required:true
    },
    owner:{
        type:String,
        required:true
    },
    sortCode:{
        type:String,
        unique:true,
        required:true
    },
    dimension:{
        type:String,
        required:true
    },
    costCenterType:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    endDate:{
        type:String,
        required:true
    },
    Active:{
        type:String
    }
})

const costCenter = new mongoose.model('OPRC', userSchema,'OPRC')
module.exports = costCenter;