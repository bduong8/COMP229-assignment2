/* 
Student Name: Brian Duong
Student ID: 300741880
Date: October 31st, 2022
Routing for the contact list
*/

var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Placeholder");
});

module.exports = router;
