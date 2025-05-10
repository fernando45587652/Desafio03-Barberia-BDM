const Cita = require('../models/Cita');

exports.crearCita = async (req, res) => {
    try {
        const cita = new Cita(req.body);
        await cita.save();
        res.status(201).json(cita);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.obtenerCitas = async (req, res) => {
    try {
        const citas = await Cita.find()
            .populate('cliente')
            .populate('barbero')
            .populate('servicio');
        res.json(citas);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
