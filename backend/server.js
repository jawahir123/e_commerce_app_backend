import express from 'express';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoute.js'
const app = express();
const port = 3000;
connectDB();
app.listen(port,()=>{
  console.log(`server is running on port${ port}`);
})