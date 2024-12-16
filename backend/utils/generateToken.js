import jwt from 'jsonwebtoken'


const generateToken =(res,id)=>{
   const token=jwt.sign({id},process.env.jwt_secret,{
      expiresIn: "1day",
   });
   res.cookie('jwt',token,{
     httpOnly: true,
   })
}

export default generateToken