const Servicio = require('../models/Servicio');

exports.crearServicio = async (req, res) => {
    try {
        const servicio = new Servicio(req.body);
        await servicio.save();
        res.status(201).json(servicio);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.obtenerServicios = async (req, res) => {
    try {
        const servicios = await Servicio.find();
        res.json(servicios);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.actualizarServicio = async (req, res) => {
    try {
        const servicio = await Servicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(servicio);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.eliminarServicio = async (req, res) => {
    try {
        await Servicio.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Servicio eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
