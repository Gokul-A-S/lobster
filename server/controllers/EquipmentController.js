const { c } = require('tar')
const Equipment = require('../models/Equipment')
const mongoose = require('mongoose')

const createEquipment = async (req, res) => {
    const { id,name,type,brand,processor,ram,hdd,dop,warranty,condition,location,lab } = req.body
    try {
        const equipment = await Equipment.create({ id,name,type,processor,ram,hdd,brand,dop,warranty,condition,location,lab })
        res.status(200).json(equipment)
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
}


const getEquipments = async (req, res) => {
    try {
        const equipment = await Equipment.find({}).sort({ createdAt: -1 })
        res.status(200).json(equipment)
    }
    catch (error) {
        return res.status(400).json(error.message)
    }
}

const getEquipment = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json("No such Equipment")
    }
    try {
        const equipment = await Equipment.findById(id)
        if (!Equipment) {
            return res.status(404).json("Error No Such Equipment")
        }
        res.status(200).json(equipment)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

const deleteEquipment = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json("No such Equipment")
    }
    try {
        const equipment = await Equipment.findByIdAndDelete(id)
        res.status(200).json(equipment)
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

const updateEquipment = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json("No such Equipment")
    }
    try{
        const equipment =await Equipment.findOneAndUpdate({_id:id},{
            ...req.body
        })

        if(!equipment){
            return res.status(404).json("No such Equipment")
        }
        const changedEquipment=await Equipment.find({lab:req.body.lab})
        console.log(req.body.lab)
        res.status(200).json(changedEquipment)
    }
    catch(error){
        return res.status(400).json(error.message)
    }
}
const searchEquipment = async (req, res) => {
    const name=req.body.name
    try {
        const result=await Equipment.find({name:{$regex:name,$options:'i'}})
        res.status(200).json(result)
    }
    catch (error) {
        return res.status(400).json(error.message)
    }
}


module.exports = { createEquipment, getEquipments, getEquipment,deleteEquipment,updateEquipment,searchEquipment }
