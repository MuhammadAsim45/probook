const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Code: {
        type: Number,
        unique: true,
        trim: true,
        required: true

    },
    Currency: {
        type: String,
        trim: true,
        required: true

    },
    International_Code: {
        type: Number,
        trim: true,
        required: true

    },
    International_Description: {
        type: String,
        trim: true,
        required: true
    },
    Hundredth_Name: {
        type: String,
        trim: true,
        required: true

    },
    English: {
        type: String,
        trim: true,
        required: true
    },
    English_Hundredth_Name: {
        type: String,
        trim: true,
        required: true
    },
    ISO_Currency_Code: {
        type: String,
        trim: true,
        required: true

    },
    Incoming_Amt_Diff_Allowed: {
        type: Number,
        trim: true,
        required: true
    },
    Outgoing_Amt_Diff_Allowed: {
        type: Number,
        trim: true,
        required: true
    },
    Outcoming_Incoming_Percent: {
        type: String,
        trim: true,
        required: true

    },
    Outgoing: {
        type: String,
        trim: true,
        required: true
    },

})
const Currency = new mongoose.model('OCRN', userSchema, 'OCRN');
module.exports = Currency;
