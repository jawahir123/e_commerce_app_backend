import express from 'express';
import { 
  createProduct, 
  getAllProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from '../controllers/productControler.js'; // Fixed typo in controller file name

const router = express.Router();

// Routes
// GET: Retrieve all products
router.get('/', getAllProducts); // GET /api/products

// POST: Create a new product
router.post('/', createProduct); // POST /api/products

// GET: Retrieve a single product by ID
router.get('/:id', getProductById); // GET /api/products/:id

// PUT: Update a product by ID
router.put('/:id', updateProduct); // PUT /api/products/:id

// DELETE: Remove a product by ID
router.delete('/:id', deleteProduct); // DELETE /api/products/:id

export default router;
