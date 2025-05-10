const Barbero = require('../models/Barbero');

exports.crearBarbero = async (req, res) => {
    try {
        const barbero = new Barbero(req.body);
        await barbero.save();
        res.status(201).json(barbero);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.obtenerBarberos = async (req, res) => {
    try {
        const barberos = await Barbero.find();
        res.json(barberos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.actualizarBarbero = async (req, res) => {
    try {
        const barbero = await Barbero.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(barbero);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.eliminarBarbero = async (req, res) => {
    try {
        await Barbero.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Barbero eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};