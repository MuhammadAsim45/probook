const mongoose=require("mongoose");

const tableSchema= new mongoose.Schema({

    Code: {
        type:String,
        trim:true,
        unique:true,
        required:true

    },
    Name:{
        type:String,
        trim:true,
        required:true
    },
    CustomName:{
       type:String,
       required:true,
       trim:true
   }
})

const oprj=new mongoose.model("name",tableSchema );


module.exports=oprj;