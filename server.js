import mongoose from 'mongoose';
import express from 'express';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js';
import productRoute from './routes/productRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = 3000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/orders',orderRouter)
app.use('/api/users', authRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
