
import mongoose from "mongoose";
const Schema = mongoose.Schema;
const DoctorSchema = new Schema({
  name: {
    type: String,
  },
  specialty: {
    type: String,
  },
  contactNumber: {
    type: Number,
  }
});




export default mongoose.model("Doctor", DoctorSchema);