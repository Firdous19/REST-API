const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/youtube-app1')
    .then(() => {
        console.log("MongoDb Connected Successfully");
    })
    .catch((err) => {
        console.log("Error Occured", err);
    });

module.exports = mongoose;
