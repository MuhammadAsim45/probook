const mongoose=require("mongoose");

const tableSchema= new mongoose.Schema({

    Code: {
        type:Number,
        trim:true,
        unique:true,
        required:true

    },
    Name:{
        type:String,
        trim:true,
        required:true
    },
   ProjectType:{
       type:String,
       required:true,
       enum:[ "i" , "e" ]
   },
    CostAllocation:{
        type:String,

        internalDropdown:{
            type:String,
         enum:[ "I", "E", "P"]
        },
        externalDropdown:{
            type:String,
         default:"Project"
        }
    
    },
    Active:{
        type:String,
       
    },
    Address:{
        type:String,
        trim:true,
        required:true 
    },
    StartDate:{
        type: String, 
        default: Date,
        required:true,   
    },

    EndDate:{
        type: String, 
        default: Date,
        required:true
    } 
})

const oprj=new mongoose.model("APRJ",tableSchema , "APRJ");


module.exports=oprj;