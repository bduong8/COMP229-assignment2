/* 
Student Name: Brian Duong
Student ID: 300741880
Date: October 31st, 2022
Contact object structure
*/

let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create a model class
let contactModel = mongoose.Schema(
  {
    name: String,
    number: String,
    email: String,
  },

  {
    collection: "contacts",
  }
);

//contactsmodel to create new contact more powerful than just class
module.exports = mongoose.model("Contact", contactModel);
