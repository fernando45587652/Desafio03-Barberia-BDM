const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServicioSchema = new Schema({
    nombre: String,
    duracion: Number,
    precio: Number
});

module.exports = mongoose.model('Servicio', ServicioSchema);