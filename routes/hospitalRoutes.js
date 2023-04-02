import express from "express";
import Hospital from "../model/HospitalSchema.js";
const router = express.Router();

router.post("/", async(req,res)=>{
   const {name,location,contactNumber,Rating}=req.body
    try {
        const newOBJ = new Hospital({name,location,contactNumber,Rating});
        if(!!name && !!location && !!contactNumber ){
            await newOBJ.save()
            return res.status(200).json({message:"saved"})
        }
    } catch (error) {
        console.log(error)
    }

});
router.get("/", async(req,res)=>{
    try {
        const data = await Hospital.find();
        console.log(data)
       return res.status(200).json({message:"saved",data})
    } catch (error) {
        console.log(error)
    }
});

router.delete("/:id", async(req,res)=>{
   try {
       const {id}=req.params;
       await Hospital.findByIdAndRemove({_id:id});
      return res.status(200).json({message:"deleted"})
   } catch (error) {
       console.log(error)
   }
});



export default router;



