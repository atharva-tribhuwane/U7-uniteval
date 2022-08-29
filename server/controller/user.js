const {User} = require("../database/user");
const connectDatabase = require("../database/index");
const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const key = "masaischool";

async function addUser(req,res){

    let {email, password, ip_address} = req.body;

    let exist = await User.findOne({email})
    console.log(exist);
    if(exist !== null){
        console.log("Yes Already exist");
        res.status(400).end("exist");
        return;
    }

    // var hash = bcrypt.hashSync('bacon', 8);
    password = bcrypt.hashSync(password, 16);

    User.create({
        email,
        password,
        ip_address
    });
    console.log("Inside correct function")
    console.log(password);
    res.status(200).end("Data Set Successfully");
}

async function findUser(req,res){
    let {email, password} = req.body;
    console.log(email,password)
    let exist = await User.findOne({email})
    console.log(exist);
    if(exist !== null){
        console.log("Yes it exist");
        const isPassword = bcrypt.compareSync(password, exist.password);

        let {email,ip_address} = exist;

        if(isPassword){
            let token = jwt.sign({email,ip_address},key);
            res.status(200).send({
                token,
                userdetails:{
                    email
                }
            })
            res.end();
        }
        else{
            res.status(200).send("Incorrect Password");
            res.end();
        }

    }
    else{
        res.status(400).end("Don't exist");
    }

}

// async function isLoggedin()

module.exports={
    addUser,
    findUser
}