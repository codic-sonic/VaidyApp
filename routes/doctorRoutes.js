import express from "express";
import Doctor from '../model/DoctorSchema.js';
const router = express.Router();

router.post("/", async(req,res)=>{
   const {name,specialty,contactNumber,Rating}=req.body
    try {
        const newOBJ = new Doctor({name,specialty,contactNumber,Rating});
       await newOBJ.save()
       return res.status(200).json({message:"saved"})
    } catch (error) {
        console.log(error)
    }
});

router.get("/", async(req,res)=>{
     try {
         const data = await Doctor.find();
        return res.status(200).json({message:"saved",data})
     } catch (error) {
         console.log(error)
     }
 });
 router.get("/:id", async(req,res)=>{
    try {
        const data = await Doctor.findById(req.params.id);
       return res.status(200).json({message:"saved",data})
    } catch (error) {
        console.log(error)
    }
});
 
 router.delete("/:id", async(req,res)=>{
    try {
        const {id}=req.params;
        await Doctor.findByIdAndRemove({_id:id});
       return res.status(200).json({message:"deleted"})
    } catch (error) {
        console.log(error)
    }
});


export default router;



