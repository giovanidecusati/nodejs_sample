'user strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller');

router.post('/', productController.post);

router.put('/:id', productController.put);

router.delete('/:id', productController.delete);

module.exports = router;