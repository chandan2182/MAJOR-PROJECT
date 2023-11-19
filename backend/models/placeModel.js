const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    description : String,
    image : String,
    address:  String, 
    createdAt: Date, 
});

module.exports = model( 'place', mySchema );