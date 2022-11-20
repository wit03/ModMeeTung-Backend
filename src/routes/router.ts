import express = require('express');
import { User } from '../models/user'


const router = express.Router();

//GET all users
router.get('/api/users', (req, res) => {
    User.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

//Create new user
router.post('/api/users/add', (req, res) => {
    const usr = new User({
        lineId: req.body.lineId,
        airtable_key: req.body.airtable_key
    });
    usr.save((err, data) => {
        res.status(200).json({
            code: 200,
            message: 'User added susccessfully!',
            User: data
        });
    })
})

//Find specific user
router.get('/api/users/:id', async (req, res) => {
    const { id }: any = req.params
    try {
        const result = await User.find({ lineId: id })
        if (result.length) {
            res.send(result);
        } else {
            res.status(404).send("Data not found")
        }
    } catch (e) {
        res.status(500).send(e)
    }

});

//Update specific user
router.put('/api/users/update/:id', async (req, res) => {
    const { id }: any = req.params
    const update = { airtable_key: req.body.airtable_key }
    try {
        const result = await User.findOneAndUpdate({ lineId: id }, update)
        res.send("User updated successfully")
    } catch (e) {
        res.status(500).send(e)
    }

})
export default router