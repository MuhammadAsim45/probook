const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({

    Country_code: {
        type: String,
        required:true
    },
    Bank_code: {
        type: String,
        required:true,
        unique: true,
    },
    Bank_Name: {
        type: String,
    },
    BIC_Swift_Code: {
        type: String,
    },
    Post_office: {
        type: String
    },
    Account_no: {
        type: Number,
        required:true
    },
    Branch_Name: {
        type: String,
    },
    Next_Check_no: {
        type: Number,
    },

})

const Bank = new mongoose.model("bank", tableSchema, "ODSC");

module.exports = Bank;