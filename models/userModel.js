import mongoose from 'mongoose'
import bcrypt from'bcrypt'

const userSchema=mongoose.Schema({
   firstName: {
      type: String,
      required: true
   },
   lastName: {
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

});

userSchema.pre("save",async function(next){
   if(!this.isModified("password")){
      next()
   }
   const salt=await bcrypt.genSalt(10);
   this.password=await bcrypt.hash(this.password,salt)
});


userSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password, this.password);
 };

const User=mongoose.model('User',userSchema)

export default User