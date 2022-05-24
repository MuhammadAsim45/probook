const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({


    Code: {
        type: Number,
        required: true,
        unique: true
      

    },
    Name: {
        type: String,
        required: true,
        trim: true

    },
    InActive: {
        type: String,
        trim: true

    },
    Category: {
        type: String,
        required: true,
        trim: true
    },
    Acquisition_Reverse: {
        type: String,
        trim: true

    },
    Effective_From: {
        type: String,
        required: true,
        trim: true
    },


    Rate_Percent: {
        type: String,
        required: true,
        trim: true
    },
    Non_Reduction_Percentage: {
        type: String,
        required: true,
        trim: true

    },
    Tax_Account: {
        type: String,
        required: true,
        trim: true
    },
    Acquisition_Tax_Account: {
        type: String,
        required: true,
        trim: true
    },
    Deferred_Tax_Account: {
        type: String,
        required: true,
        trim: true
    },
    Non_Deduct_Account: {
        type: String,
        required: true,
        trim: true
    },
    Group_Description: {
        type: String,
        required: true,
        trim: true
    },

})

const Tax = new mongoose.model('OSTC', userSchema, 'OSTC')
module.exports = Tax;
