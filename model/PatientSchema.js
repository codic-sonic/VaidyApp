import mongoose from "mongoose";
const Schema = mongoose.Schema;
const PatientSchema = new Schema({
  name: {
    type: String
  },
  age:{
    type: Number
  },
  contactNumber:{
     type: Number
  },
  disease:{
    type: String
  }
});




export default mongoose.model("Patient", PatientSchema);