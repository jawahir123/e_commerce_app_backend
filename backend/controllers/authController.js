// impelement here login, register, password reset
import User from "../models/userModel";

export const registerUser =async(req,res)=>{
   const {name,email,password,role}=req.body

   const existUser=User.findOne({email})
   if(existUser){
      res.status(403)
      throw new Error("This User already exist")
   }

   const user=User.create({name,email,password,role})
   if(user){
      res.status(201).json({
         id:user.id,
         name:user.name,
         email:user.email,
         password:user.password,
         role: user.role
      })
   }else{
      res.status(401)
      console.log("invalid data")
   }

}