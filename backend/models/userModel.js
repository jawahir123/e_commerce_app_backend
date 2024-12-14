import mongoose from 'mongoose'

const userSchema=mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   email:{
      type: String,
      required: true,
      unique: true
   },
   password:{
      type:String,
      required:true,
      unique:true
   },
   role:{
      type:String,
      enum:["customer","admin"],
      default:"customer"
   },
   created_at:{
      type:Date,
      default: Date.now
   },
   updated_at:{
      type:Date
   }

})

const User=mongoose.model('User',userSchema)

export default User