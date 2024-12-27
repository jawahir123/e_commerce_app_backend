import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/productControler.js';

const router = express.Router();

// Route to create a new product
router.post('/', createProduct); // POST /api/products

// Route to get all products
router.get('/', getAllProducts); // GET /api/products

// Route to get a single product by ID
router.get('/:id', getProductById); // GET /api/products/:id

// Route to update a product by ID
router.put('/:id', updateProduct); // PUT /api/products/:id

// Route to delete a product by ID
router.delete('/:id', deleteProduct); // DELETE /api/products/:id

export default router;
