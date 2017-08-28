const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requiredString = {
    type: String, 
    required: true
};


const schema = new Schema({
    title: requiredString,
    description: requiredString,
    url: requiredString
});

module.exports = mongoose.model('Bunny', schema);