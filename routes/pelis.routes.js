import express from 'express';
const router = express.Router();
import peliController from '../controller/pelis.controller.js';
import module from 'module';
// Retrieve all pelis
router.get('/obtenerpelis', peliController.findAll);
// Create a new peli
router.post('/nuevapeli', peliController.create);
// Retrieve a single peli with id
router.get('/buscarpeli/:id', peliController.findById);

// Retrieve keywords with id
router.get('/obtenerkeywords/:id', peliController.getKeyWords);
// Update a peli with id
router.put('/actualizarpeli/:id', peliController.update);
// Delete a peli with id
router.delete('/borrarpeli/:id', peliController.delete);
module.exports = router
export default router
