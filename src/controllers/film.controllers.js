const express=require("express");
const Film=require("../models/film.models");

const router=express.Router();

router.get("",async(req,res)=>{
    try{
            const film=await Film.find().lean().exec();
            return res.status(200).send(film);
    }catch(err){
                return res.status(500).send({message:err.message});
    }
});

module.exports=router;
