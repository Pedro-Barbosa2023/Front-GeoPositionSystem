const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    latitude: String,
    longitude: String,
    altura: String,
})

const Rastreador = mongoose.model('Rastreador', DataSchema) // falando pro mongoose criar um model usuario atraves dos campos do DataSchema
module.exports = Rastreador; 