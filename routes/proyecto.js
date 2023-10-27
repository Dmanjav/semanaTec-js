const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyecto');

//Rutas de mis controllers
router.post('/agregarProyecto', proyectoController.postAgregarProyecto);

router.get('/consultarProyecto', proyectoController.getConsultarProyecto);

module.exports = router;