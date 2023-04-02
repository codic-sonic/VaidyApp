import express from "express";
import RequestForm from "../model/RequestFormRoutes.js";
const router = express.Router();

router.get("/req-form", async(req,res)=>{
    const {location,group,quantity}=req.body
    try {
        const data = await RequestForm.find({location,group,quantity});
       return res.status(200).json({message:"saved",data})
    } catch (error) {
        console.log(error)
    }
});

export default router;