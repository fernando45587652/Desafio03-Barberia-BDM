const Cliente = require('../models/Cliente');

exports.crearCliente = async (req, res) => {
    try {
        const cliente = new Cliente(req.body);
        await cliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.obtenerClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};

exports.actualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.eliminarCliente = async (req, res) => {
    try {
        await Cliente.findByIdAndDelete(req.params.id);
        res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
