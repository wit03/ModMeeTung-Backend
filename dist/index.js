"use strict";
exports.__esModule = true;
var index_1 = require("./src/index");
//Express Port
var port = 1337;
index_1["default"].listen(port, function () {
    console.log("App opened at port > ".concat(port, "!"));
});
