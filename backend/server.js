import express from 'express';
import connectDB from './config/db.js';
import authRoute from './routes/authRoute.js'
import cookieParser from 'cookie-parser'

const app = express();
const port = 3000;
app.get('/api/',(req,res)=>{
  res.send("hello");
})
connectDB();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',authRoute)
app.listen(port,()=>{
  console.log(`server is running on port${ port}`);
})