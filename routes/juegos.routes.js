import express from 'express'
const router = express.Router()
import juegoController from '../controller/juegos.controller.js';
import module from 'module';
// Retrieve all juegos
router.get('/obtenerjuegos', juegoController.findAll);//crear endpoints
// Create a new juego
router.post('/nuevojuego', juegoController.create);
// Retrieve a single juego with id
router.get('/buscarjuego/:id', juegoController.findById);
// Retrieve keywords with id
router.get('/obtenerkeywords/:id', juegoController.getKeyWords);
// Update a juego with id
router.put('/actualizarjuego/:id', juegoController.update);
// Delete a juego with id
router.delete('/borrarjuego/:id', juegoController.delete);
module.exports = router
export default router
