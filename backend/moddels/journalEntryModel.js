const mongoose = require('mongoose')

const userSchema1 = new mongoose.Schema({

    GL_Account: {
        type: String,
        // required: true
    },
    Name: {
        type: String,
        // required: true
    },
    Control: {
        type: String,
        // required: true
    },
    Debit: {
        type: String,
        // required: true
    },
    Credit: {
        type: String,
        // required: true
    },
    Remark: {
        type: String,
        // required: true
    },
    Employee_id: {
        type: String,
        // required: true
    },
    Ref1: {
        type: String,
        // required: true
    },
    Ref3: {
        type: String,
        // required: true
    },
    Project: {
        type: String,
        // required: true
    },
    CostCenter:{
        type: String,
        // required: true
    }
})
const userSchema = new mongoose.Schema({
    Number: {
        type: String,
        // required: true
    },
    Series: {
        type: String,
        // required: true

    },
    postingDate: {
        type: String,
        // required: true
    },
    dueDate: {
        type: String,
        // required: true
    },
    docDate: {
        type: String,
        // required: true
    },
    remarks: {
        type: String,
        // required: true
    },
    origin: {
        type: Number,
        // required: true
    },
    trans: {
        type: Number,
        // required: true
    },
    project: {
        type: String,
        // required: true
    },
    ref: {
        type: String,
        // required: true
    },
    ref2: {
        type: String,
        // required: true
    },
    ref3: {
        type: String,
        // required: true
    },
    DocumentLines: [userSchema1],

})

const SAS = new mongoose.model('OJDT', userSchema, 'OJDT')
module.exports = SAS;