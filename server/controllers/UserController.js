const User = require('../models/User')
const jwt=require('jsonwebtoken')

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.JWT_SECRET,{expiresIn:'1h'})
    
}
const loginUser= async (req, res) => {
    const {id,password}=req.body
    try{
        const user=await User.login(id,password)
        const token=createToken(user._id)   
        res.status(200).json({id,token})
    }
    catch(error)
    {
        res.status(400).json(error.message)
    }
    

}
const registerUser= async (req, res) => {
    const {id,password}=req.body
    try{
        const user=await User.signUp(id,password)
        const token=createToken(user._id)
        res.status(200).json({id,token})
    }
    catch(error){
        res.status(400).json(error.message)
    }

}

module.exports={registerUser,loginUser}