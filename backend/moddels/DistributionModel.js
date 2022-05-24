const mongoose=require("mongoose");

const tableSchema= new mongoose.Schema({

    Code: {
        type:Number,
        unique: true

    },
    StartDate:{
        type: String, 
        default: Date,  
    },
    EndDate:{
        type: String, 
        default: Date,
    },
    Discription:{
        type:String,
    },
    Dimension:{
        type:String,
        
    },
    Active:{
        type:String,
          
    },  
    Total:{
        type:Number,
          
    },
    Direct_Allocation:{
        type:String,
          
    },
    Fixed_Amount:{
        type:String,
          
    },
})
const Distribution=new mongoose.model("OOCR",tableSchema,"OOCR");


module.exports=Distribution;