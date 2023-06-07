const express=require('express')
const router=express.Router()

const {getReport}=require('../controllers/ReportController')

router.post('/',getReport)

module.exports=router