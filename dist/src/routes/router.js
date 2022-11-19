"use strict";
exports.__esModule = true;
var express = require("express");
var user_1 = require("../models/user");
var router = express.Router();
router.get('/api/users', function (req, res) {
    user_1.User.find({}, function (err, data) {
        if (!err) {
            res.send(data);
        }
        else {
            console.log(err);
        }
    });
});
router.post('/api/users/add', function (req, res) {
    var usr = new user_1.User({
        lineId: req.body.lineId,
        airtable_key: req.body.airtable_key
    });
    usr.save(function (err, data) {
        res.status(200).json({
            code: 200,
            message: 'User added susccessfully!',
            User: data
        });
    });
});
exports["default"] = router;
