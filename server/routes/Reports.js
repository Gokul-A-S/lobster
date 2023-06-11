const express=require('express')
const router=express.Router()
const {getReport,getStats}=require('../controllers/ReportController')
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth)
router.post('/',getReport)
router.get('/',getStats)

module.exports=router