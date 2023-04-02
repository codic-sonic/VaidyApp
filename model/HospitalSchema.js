
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const HospitalSchema = new Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  contactNumber: {
    type: Number
  },
  doctors:[{
    type:mongoose.Schema.ObjectId,
    ref:"Hospital"
  }]
});



export default mongoose.model("Hospital", HospitalSchema);