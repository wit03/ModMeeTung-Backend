import mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    lineId: {
        type: String,
        required: true
    },
    airtable_key: {
        type: String,
        required: true
    }
})

export const User = mongoose.model('User', userSchema);


