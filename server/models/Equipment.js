const mongoose = require('mongoose')

const equipmentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    processor:{
        type: String,

    },
    ram:{
        type: String,
    },
    hdd:{
        type: String,
    },
    brand: {
        type: String,
        required: true,
    },
    dop: {
        type: Date,
        required: true,
    },
    warranty: {
        type: Date,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
   
    location: {
        type: String,
        required: true,
    },
    lab: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('Equipment', equipmentSchema)
