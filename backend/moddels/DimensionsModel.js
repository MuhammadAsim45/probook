const mongoose=require("mongoose");

const tableSchema= new mongoose.Schema({

    DimCode:{
        type:Number,
        default:1
    },
    DimName:{
        type:String,
        default:"Dimension 1"
    },
    DimActive:{
        type:String, 
    },
    DimDesc:{
        type:String, 
        default:"Discription 1" 
        }    
   
})

const Dimension=new mongoose.model("ODIM",tableSchema , "ODIM");

module.exports=Dimension;