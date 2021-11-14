import express from 'express';
const router = express.Router()
import serieController from '../controller/series.controller.js';
import module from 'module';
// Retrieve all series
router.get('/obtenerseries', serieController.findAll);//crear endpoints
// Create a new serie
router.post('/nuevoserie', serieController.create);
// Retrieve a single serie with id
router.get('/buscarserie/:id', serieController.findById);
// Retrieve keywords with id
router.get('/obtenerkeywords/:id', serieController.getKeyWords);
// Update a serie with id
router.put('/actualizarserie/:id', serieController.update);
// Delete a serie with id
router.delete('/borrarserie/:id', serieController.delete);

module.exports = router;
export default router;
