const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    latitude: String,
    longitude: String,
    altura: String,
    __v: Number,
})

const Rastreador = mongoose.model('Rastreador', DataSchema) // falando pro mongoose criar um model usuario atraves dos campos do DataSchema
module.exports = Rastreador; 