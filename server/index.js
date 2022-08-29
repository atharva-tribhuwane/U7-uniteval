const express = require("express");
const app = express();
const {addUser, findUser} = require("./controller/user");
const {connectDatabase} = require("./database/index");
app.use(express.json());

app.post("/register", addUser);
app.post("/login", findUser);


connectDatabase().then(() => {
    app.listen(3001, () => {
        console.log(`Connected to server !!!`);
    })
})
