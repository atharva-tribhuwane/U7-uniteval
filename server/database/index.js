const mongoose = require('mongoose');


async function connectDatabase() {
    return new Promise((resolve, reject) => {
        mongoose.connect("mongodb://127.0.0.1:27017/U7-uniteval", (err) => {
            if (err) {
                console.error("Error: ", err);
                reject();
                return;
            }
            console.log("Connected to database successfully!!!");
            resolve()
        })
    })
}


module.exports = {
    connectDatabase
}
