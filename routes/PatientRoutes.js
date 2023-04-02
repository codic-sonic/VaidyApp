import express from "express";
import Patient from "../model/PatientSchema.js";
const router = express.Router();

router.post("/", async(req,res)=>{
   const {name,age,contactNumber,disease}=req.body
    try {
        const newOBJ = new Patient({name,age,contactNumber,disease});
       await newOBJ.save()
       return res.status(200).json({message:"saved"})
    } catch (error) {
        console.log(error)
    }

});
router.get("/", async(req,res)=>{
    try {
        const data = await Patient.find();
       return res.status(200).json({message:"May be Empty",data})
    } catch (error) {
        console.log(error)
    }
});

router.delete("/:id", async(req,res)=>{
   try {
       const {id}=req.params;
       await Patient.findByIdAndRemove({_id:id});
      return res.status(200).json({message:"deleted"})
   } catch (error) {
       console.log(error)
   }
});



export default router;