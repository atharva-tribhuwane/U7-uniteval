const {User} = require("../database/user");
const connectDatabase = require("../database/index");
const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

async function addUser(req,res){

    let {email, password, ip_address} = req.body;

    let exist = await User.findOne({email})
    console.log(exist);
    if(exist !== null){
        console.log("Yes Already exist");
        res.status(400).end("exist");
        return;
    }

    password = bcrypt.hash(password, 16);

    User.create({
        email,
        password,
        ip_address
    });
    res.status(200).end("Data Set Successfully");
}

async function findUser(req,res){
    let {email, password} = req.body;
    console.log(email,password)
    let exist = await User.findOne({email})
    console.log(exist);
    if(exist !== null){
        console.log("Yes it exist");
        res.status(200).end("exist");
        return;
    }
    else{
        res.status(400).end("Don't exist");
    }

}

module.exports={
    addUser,
    findUser
}