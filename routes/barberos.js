const express = require('express');
const router = express.Router();
const barberoController = require('../controllers/barberoController');

router.post('/', barberoController.crearBarbero);
router.get('/', barberoController.obtenerBarberos);
router.put('/:id', barberoController.actualizarBarbero);
router.delete('/:id', barberoController.eliminarBarbero);

module.exports = router;
