const express = require("express");
const cors = require("cors");

const app = express();
const {addUser, findUser} = require("./controller/user");
const {connectDatabase} = require("./database/index");
// app.use(cors);
app.use(express.json());


app.post("/register", addUser);
app.post("/login", findUser);
// app.post("/getTodos", getTodos)

connectDatabase().then(() => {
    app.listen(3001, () => {
        console.log(`Connected to server !!!`);
    })
})
