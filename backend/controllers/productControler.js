import Product from '../models/productModel.js';
import mongoose from 'mongoose';
// Helper function for finding a product by ID
const findProductById = async (id, res) => {
  try {
    const product = await Product.findById(id).populate('category'); // Populate category details
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return product;
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// CREATE: Add a new product
export const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, image, stock } = req.body;

    // Validate required fields
    if (!name || !price || !description || !category || !image || stock === undefined) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    // Create and save the new product
    const newProduct = new Product({ name, price, description, category, image, stock });
    const product = await newProduct.save();

    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
// READ: Get all products by category
export const getProductsByCategory = async (req, res) => {
  try {
    // Get the category from the route parameter
    const categoryId = req.params.category;

    // Check if the categoryId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(categoryId)) {
      return res.status(400).json({ error: 'Invalid category ID' });
    }

    // Find products by category
    const products = await Product.find({ category: categoryId });

    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found for this category' });
    }

    return res.status(200).json({
      products,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};


// READ: Get a single product by ID
export const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await findProductById(id, res);
    if (product) {
      res.status(200).json({ message: 'Product retrieved successfully', product });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// UPDATE: Update a product by ID
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, category, image, stock } = req.body;

  try {
    const product = await findProductById(id, res);
    if (!product) return;

    // Update the product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, price, description, category, image, stock },
      { new: true } // Return the updated product
    ).populate('category');

    res.status(200).json({ message: 'Product updated successfully', updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// DELETE: Delete a product by ID
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await findProductById(id, res);
    if (!product) return;

    // Delete the product
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};
