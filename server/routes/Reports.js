const express=require('express')
const router=express.Router()

const {createReport}=require('../controllers/ReportController')

router.post('/',createReport)