"use strict";
exports.__esModule = true;
/**
 * Headers
 */
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var router_1 = require("./routes/router");
var mongoURL = 'mongodb://mongo:27017';
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose
    .connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(function () {
    console.log("connected to Mongo!");
})["catch"](function (err) {
    console.log(err.message);
    process.exit(-1);
});
// Route
app.use('/', router_1["default"]);
exports["default"] = app;
