import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ApiSchema = new Schema({
  firstName: {
    type: String,
    required: "Enter a First Name",
  },
  lastName: {
    type: String,
    required: "Enter a Last Name",
  },
  email: {
    type: String,
  },
  company: {
    type: String,
  },
  phone: {
    type: Number,
  },
});
