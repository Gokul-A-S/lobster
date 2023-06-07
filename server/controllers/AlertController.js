const Equipment = require("../models/Equipment")
const currentDate = new Date();

const getAlerts = async (req, res) => {
    try {
        const alerts = await Equipment.find({ $expr: {
    $lt: [
        {
          $dateDiff: {
            startDate: '$expiry',
            endDate: currentDate,
            unit: 'month'
          }
        },
        6
      ]
    }})
        res.status(200).json(alerts)
    } catch (error) {
        res.status(400).json({ error:error.message })
    }    

}

module.exports = { getAlerts }