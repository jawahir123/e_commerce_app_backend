// impelement here login, register, password reset
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

export const registerUser =async(req,res)=>{
   const {firstName,lastName,email,password,role}= req.body

   const existUser=await User.findOne({email})
   if(existUser){
      res.status(403)
      throw new Error("This User already exist")
   }

   const user=await User.create({firstName,lastName,email,password,role})
   if(user){
      generateToken(token,user.id)
      res.status(201).json({
         id:user.id,
         firstName:user.firstName,
         lastName: user.lastName,
         email:user.email,
         password:user.password,
         role: user.role
      })
   }else{
      res.status(401)
      console.log("invalid data")
   }

}

//login
export const login =async (req,res)=>{
   const {email,password}= req.body

   const user=User.findOne({email})

   if(user && (await user.comparePassword(password))){
      const token =generateToken(res,user._id)

      res.json({
         _id: user._id,
         firstName:user.firstName,
         lastName:user.lastName,
         email:user.email,
         password:user.password,
         role:user.role
      })
   }
}