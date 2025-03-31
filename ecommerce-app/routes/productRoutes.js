const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authMiddleware } = require('../middleware/authMiddleware');

router.get('/', productController.getAllProducts);
router.get('/my', authMiddleware, productController.getMyProducts);
router.post('/create', authMiddleware, productController.createProduct);

module.exports = router;
