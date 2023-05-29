const mongoose = require('mongoose')

const LabSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    fic: {
        type: String,
        required: true,
    },
}, { timestamps: true })


module.exports = mongoose.model('Lab', LabSchema)
