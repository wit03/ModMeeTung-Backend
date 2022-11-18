const mongoose = require('mongoose');

const User = mongoose.model('User',{
    lineId: {
        type: String,
        required: true
    },
    airtable_key: {
        type: String,
        required: true
    }
});

module.exports = {User}
