"use strict";
import razor from "../controller/razor.controller.js";
import express from 'express';
import module from 'module';

const router = express.Router()

router.get('/razeUrl/:url', razor.razeUrl);

module.exports = router;
export default router;