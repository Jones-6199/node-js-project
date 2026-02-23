const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const addcustomerSchema = Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  customerEmail: {
    type: String,
    required: true,
  },
  customerPhoneNumber: {
    type: Number,
    required: true,
  },
  customerAge: {
    type: Number,
    required: true,
  },
  customerCountry: {
    type: String,
    required: true,
  },
  customerGender: {
    type: String,
    required: true,
  },
});

const Customer = mongoose.model("Customer", addcustomerSchema);

module.exports = Customer;
