const mongoose = require('mongoose');
const mongoURL = 'mongodb://mongo:27017'; // because we are using docker-compose.yml , run mongo within docker vm. 

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(mongoURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch(err) {
        console.log(err);
        process.exit(1); // end the process after connection failed
    }
}

module.exports = connectDb;