const { model, Schema } = require('../connection');

const mySchema = new Schema({
    user : String,
    place : String,
    services : Array,
    createdAt: Date, 
});

module.exports = model( 'booking', mySchema );