const mongoose=require("mongoose")

const resturentSchema=new mongoose.Schema({
    Rname:{
        type:String,
        required:true
    },
    review:{
  type:[String]
    },
    item:{
        type:String
    },
    address:{
        type:String,
        required:true
    },
    description:{
      type:String,
      required:true
    }
},{timestamps:true})
module.exports=mongoose.model("resturent",resturentSchema)
