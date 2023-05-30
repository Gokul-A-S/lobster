const express = require('express')
const requireAuth = require('../middleware/requireAuth')
const { getLabs, getLab, createLab, deleteLab, updateLab } = require('../controllers/LabController')
const router = express.Router()

router.use(requireAuth)

router.get('/', getLabs)

router.get('/:id', getLab)

router.post('/', createLab)

router.delete('/:id', deleteLab)

router.patch('/:id', updateLab)

module.exports=router