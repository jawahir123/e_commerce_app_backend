import express from 'express';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import productRoute from './routes/productRoute.js'
import categoryRoutes from './routes/categoryRoutes.js'
import shoppingCartRo from   './routes/shoppingCartRo.js'
const app = express();
const port = 3000;
connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/users',authRoute)
app.use('/api/products',productRoute)
app.use('/api/categories',categoryRoutes)
app.use('/api/cart',shoppingCartRo)


app.listen(port,()=>{
  console.log(`server is running on port${ port}`);
})