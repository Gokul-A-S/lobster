const express = require('express')
const { createEquipment,getEquipment,getEquipments,deleteEquipment,updateEquipment } = require('../controllers/EquipmentController')
const router = express.Router()


router.get('/',getEquipments)

router.get('/:id',getEquipment)

router.post('/',createEquipment)

router.delete('/:id',deleteEquipment)

router.patch('/:id',updateEquipment)


module.exports = router