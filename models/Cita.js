const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitaSchema = new Schema({
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    barbero: { type: Schema.Types.ObjectId, ref: 'Barbero' },
    servicio: { type: Schema.Types.ObjectId, ref: 'Servicio' },
    fechaHora: Date,
    estado: {
        type: String,
        enum: ['pendiente', 'completada', 'cancelada'],
        default: 'pendiente'
    }
});

module.exports = mongoose.model('Cita', CitaSchema);