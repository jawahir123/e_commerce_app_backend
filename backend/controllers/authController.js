// impelement here login, register, password reset
import User from "../models/userModel.js";
import jwt from 'jsonwebtoken'

const generateToken = (id, role) => {
   return jwt.sign({ id, role }, process.env.JWT_SECRET, {
     expiresIn: '1d',
   });
 };

export const registerUser =async(req,res)=>{
   const {fullname,email,password,role}= req.body

   const existUser=await User.findOne({email})
   if(existUser){
      return res.status(403).json({ message: "This user already exists" });
   }

   const user=await User.create({fullname,email,password,role})

   res.status(201).json({
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        password:user.password,
        role: user.role,
      },
    });

}

//login
export const login =async (req,res)=>{
   const {email,password}= req.body

   const user=await User.findOne({email})
   const ismatch =await user.comparePassword(password);

   if(!ismatch){
      return res.status(401).json({message:"invalid email or password"})
   }

   res.json({
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role,
      },
    });
   
}