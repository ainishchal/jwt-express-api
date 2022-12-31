import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  username: {
    type: String,
    required: "Enter a First Name",
  },
  email: {
    type: String,
    required: "Enter a Last Name",
  },
  hashPassword: {
    type: String,
    required: true
  },
 create_date:{
    type:Date,
    default:Date.now
 } 
});

UserSchema.methods.comparePassword = (password,hashPassword,err)=>{
  return bcrypt.compareSync(password,hashPassword) || "NULL"
}

