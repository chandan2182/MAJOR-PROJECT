const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    email : String,
    password : String,
    avatar: { String, default: "avatar place"},
    createdAt: Date, 
});

module.exports = model( 'user', mySchema );