const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BarberoSchema = new Schema({
    nombre: String,
    especialidad: String,
    experienciaAnios: Number
});

module.exports = mongoose.model('Barbero', BarberoSchema);