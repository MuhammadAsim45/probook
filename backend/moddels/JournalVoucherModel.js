const mongoose = require("mongoose");

const JVSchema = new mongoose.Schema({

    JVNumber: {
        type: Number,
    },
    Remarks: {
        type: String,
    },
    Trans: {
        type: Number,
    },
    Date: {
        type: String,
    },
    TotalLC: {
        type: Number,
    },

})

const JournalVoucher = new mongoose.model("Journal_Voucher", JVSchema, "JV");

module.exports = JournalVoucher;