const mongoose = require('mongoose');
const { model } = require('./user.model');

const Schema = mongoose.Schema;

const GreenPointSchema = new Schema({
    username: {type: String, required: true},
    pointname: {type: String, required: true},
    pointID: {type: Number, required: true },
    date: {type: Date, required: true},
    location: {type: String, required: true},
    containers: {type: String, required: true},
    weight: { type: String, required: true},
},
{
    timestamps: true,
});

const Green = mongoose.model('Green', GreenPointSchema);

module.exports = Green;