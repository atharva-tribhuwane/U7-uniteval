const connectDatabase = require('./index');
const { create } = require("domain");
const mongoose = require("mongoose");
const {Schema, model} = mongoose;
const UserSchema = new Schema({
    task:String,
    isCompleted:Boolean,
    tag:String

});


const User = model('User',UserSchema);

module.exports={
    User
}