import express from 'express';
import connectDB from './config/db.js';
const app = express();
const port = 3000;
app.get('/api/',(req,res)=>{
  res.send("hello");
})
connectDB();
app.listen(port,()=>{
  console.log(`server is running on port${ port}`);
})