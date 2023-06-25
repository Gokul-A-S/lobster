const Equipment = require('../models/Equipment');
const Lab = require('../models/Lab');


const getReport = async (req, res) => {
    try {

        const equipments = await Equipment.find({ _id: { $in: req.body } })
        res.status(200).json(equipments)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
const getStats = async (req, res) => {
    try {
        const totalCount = await Equipment.countDocuments()
        const totalWorking = await Equipment.countDocuments({ condition: 'Working' })
        const totalLabs = await Lab.countDocuments()
        const json  ={
            'totalCount': totalCount,
            'totalWorking': totalWorking,
            'totalLabs': totalLabs
        }
        
        res.status(200).json(json)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
    
}
module.exports = { getReport, getStats }        