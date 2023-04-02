import mongoose from "mongoose";
const Schema = mongoose.Schema;
const BloodBankSchema = new Schema({
  bloodCollection:[
    { group:String,
      quantity:Number
    }
  ],
  contactNumber:{
     type: Number
  },
  location:{
    type: String
  },
  name:{
    type: String
  }
});




export default mongoose.model("BloodBank", BloodBankSchema);