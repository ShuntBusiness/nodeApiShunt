const express = require('express')
const router = express.Router()
const usuarioController = require('../controller/usuarios.controller');
// Retrieve all usuarios
router.get('/obtenerusuarios', usuarioController.findAll);//crear endpoints
// Create a new usuario
router.post('/nuevousuario', usuarioController.create);
// Retrieve a single usuario with id
router.get('/buscarusuario/:id', usuarioController.findById);
// Retrieve keywords with id
router.get('/obtenerkeywords/:id', usuarioController.getKeyWords);
// Update a usuario with id
router.put('/actualizarusuario/:id', usuarioController.update);
// Delete a usuario with id
router.delete('/borrarusuario/:id', usuarioController.delete);
module.exports = router
