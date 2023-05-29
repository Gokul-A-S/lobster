const Lab =require('../models/Lab')
const mongoose = require('mongoose')
const createLab=async (req,res)=>{
    const {code,name,fic}=req.body
    try{
        const lab=await Lab.create({code,name,fic})
        res.status(200).json(lab)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }


}
const getLab=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json("No such Lab")
        
    }
    try{
        const lab=await Lab.findById(id)
        if(!Lab){
            return res.status(404).json("Error No Such Lab")
        }
        res.status(200).json(lab)
    }
    catch(error){
        return res.status(400).json({error:error.message})
    }


}
const getLabs=async (req,res)=>{
    try{
        const labs=await Lab.find({}).sort({createdAt:-1})
        res.status(200).json(labs)
    }
    catch(error){
        res.status(400).json({error:error.message})
    }

}
const deleteLab=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json("No such Lab")
          
    }
    try{
        const lab=await Lab.findByIdAndDelete(id)
        res.status(200).json(lab)
    }
    catch(error){
        return res.status(400).json(error.message)
    }

}
const updateLab=async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json("No such Lab")
    }
    try{
        lab=await Lab.findByIdAndUpdate(id,req.body)
        res.status(200).json(lab)
    }
    catch(error){
        return res.status(400).json(error.message)
    }

}

module.exports={getLabs,getLab,createLab,deleteLab,updateLab}


