const express = require('express');

const router = express.Router();

const {User} = require('../models/user');

router.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

router.post('/api/users/add', (req, res) =>{
    const usr = new User({
        lineId: req.body.lineId,
        airtable_key: req.body.airtable_key
    }); 
    usr.save((err, data) => {
        res.status(200).json({
            code:200, 
            message:'User added susccessfully!', 
            User:data});
    })
})

module.exports = router;