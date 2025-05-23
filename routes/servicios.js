const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

router.post('/', servicioController.crearServicio);
router.get('/', servicioController.obtenerServicios);
router.put('/:id', servicioController.actualizarServicio);
router.delete('/:id', servicioController.eliminarServicio);

module.exports = router;
