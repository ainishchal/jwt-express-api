import mongoose from "mongoose";
import { ApiSchema } from "../model";
 
const ApiModel = mongoose.model("API", ApiSchema);

 
export const createContact =   (req, res) => {
  console.log(req.body);
  let newApiData = new ApiModel(req.body);
  console.log(newApiData);
    newApiData.save((err, data) => {
    console.log("Data Save SuccessFully");
    return res.json(data);
  });
};
export const getContacts =  (req, res) => {
  return ApiModel.find({}, (err, data) => {
    if (err) {
      console.log("GET Request Error....");
    } else {
      res.json(data);
    }
  });
};
export const getSingleContacts =   (req, res) => {
  return  ApiModel.findById(req.params.id, (err, data) => {
    if (err) {
      console.log("GET Request Error....");
    }
    res.json(data);
  });
}

export const updateContact = (req, res) => {
    ApiModel.findOneAndUpdate(req.params.id,req.body,{new:true,useFindAndModify: false},(err, contact) => {
     if (err) {
       return res.send(err);
     }
 
     return res.json(contact);
   });
 };
 export const deleteContact = (req, res) => {
   ApiModel.deleteOne({__id:req.params.id},req.body,(err, contact) => {
     if (err) {
       return res.send(err);
     }
 
     return res.json({message:"Successfuly Deleted"});
   });
 };
