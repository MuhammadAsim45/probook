const mongoose = require("mongoose");

const ChartAccountSchema = new mongoose.Schema({
  Parent: {
    type: String,
  },
  Group_Mask: {
    type: String,
  },
  GL_Account: {
    type: String,
    unique: true,
  },
  Name: {
    type: String,
  },
  ExternalCode: {
    type: String,
  },
  Currency: {
    type: String,
  },
  Confidential: {
    type: String,
  },
  Level: {
    type: String,
  },
  Code: {
    type: String,
  },
  Balance: {
    type: String,
  },
  AccountType: {
    type: String,
  },
  ControlAccount: {
    type: String,
  },
  CashAccount: {
    type: String,
  },
  Indexed: {
    type: String,
  },
  RevalCurrency: {
    type: String,
  },
  BlockPosting: {
    type: String,
  },
  Title: {
    type: String,
  },
  Active: {
    type: String,
  },
});

const ChartAccount = new mongoose.model("OACT", ChartAccountSchema, "OACT");

module.exports = ChartAccount;
