const Equipment = require('../models/Equipment');

const getReport = async (req, res) => {
    try {
        const equipments = await Equipment.find({ _id: { $in: req.body } })
        res.status(200).json(equipments)
    }
    catch (err) {
        res.status(500).json({ error: err.message })
    }
}
module.exports = { getReport }        