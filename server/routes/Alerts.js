const express=require('express')
const {getAlerts}=require('../controllers/AlertController')
const router=express.Router()

router.get('/',getAlerts)

module.exports=router