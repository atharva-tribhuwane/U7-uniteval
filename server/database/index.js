const mongoose = require('mongoose');

const uri = "mongodb://127.0.0.1:27017/Auth";

async function connectDatabase(){
    return new Promise((resolve,reject)=>{
        mongoose.connect(uri,(err)=>{
            if(err){
                console.error("Error: ",err);
