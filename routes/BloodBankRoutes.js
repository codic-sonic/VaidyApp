import express from "express";
import BloodBank from "../model/BloodBankschema.js";
const router = express.Router();

router.post("/", async(req,res)=>{
   const {bloodCollection,contactNumber,location,name,Rating}=req.body
    try {
        const newOBJ = new BloodBank({bloodCollection,contactNumber,location,name,Rating});
       await newOBJ.save()
       return res.status(200).json({message:"saved"})
    } catch (error) {
        console.log(error)
    }

});
router.get("/", async(req,res)=>{
    try {
        const data = await BloodBank.find();
       return res.status(200).json({message:"saved",data})
    } catch (error) {
        console.log(error)
    }
});

router.delete("/:id", async(req,res)=>{
   try {
       const {id}=req.params;
       await BloodBank.findByIdAndRemove({_id:id});
      return res.status(200).json({message:"deleted"})
   } catch (error) {
       console.log(error)
   }
});



export default router;