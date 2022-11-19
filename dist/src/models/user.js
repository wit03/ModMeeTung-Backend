"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    lineId: {
        type: String,
        required: true
    },
    airtable_key: {
        type: String,
        required: true
    }
});
exports.User = mongoose.model('User', userSchema);
