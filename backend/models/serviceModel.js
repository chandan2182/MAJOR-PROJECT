const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    image : String,
    description : String,
    features: Array,
    price: Number,
    createdAt: Date, 
});

module.exports = model( 'service', mySchema );