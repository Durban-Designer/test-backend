var express = require("express");
var mongodb = require("mongodb");
var _ = require("lodash");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var mongoose = require("mongoose");
var Offer = mongoose.model("Offer");

app.use(bodyParser.json());

module.exports = router;
