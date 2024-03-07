const mongoose = require('mongoose');

const ConnectDB = () => {
    mongoose.connect(`mongodb://localhost:27017/library`).then(() => {
        console.log(`Successfully connected to the server with host`);
    }).catch((error) => {
        console.log('Connection to the database failed:', error);
    });
}

module.exports = ConnectDB;
