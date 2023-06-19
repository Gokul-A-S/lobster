const express = require('express')
const { searchEquipment,createEquipment, getEquipment, getEquipments, deleteEquipment, updateEquipment } = require('../controllers/EquipmentController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

router.use(requireAuth)

router.get('/', getEquipments)

router.get('/:id', getEquipment)

router.post('/', createEquipment)

router.post('/search', searchEquipment)

router.delete('/:id', deleteEquipment)

router.patch('/:id', updateEquipment)


module.exports = router