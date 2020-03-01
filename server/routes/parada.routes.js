const express = require('express');
const router = express.Router();

const paradaCtrl = require('../controllers/parada.controller')

router.get('/', paradaCtrl.getParadas);
router.post('/', paradaCtrl.createParada);
router.get('/:id', paradaCtrl.getParada);
router.put('/:id', paradaCtrl.editParada);
router.delete('/:id', paradaCtrl.deleteParada);

module.exports = router;