const User = require('../models/User')


const loginUser= async (req, res) => {
    res.json("Login User")

}
const registerUser= async (req, res) => {
    const {id,password}=req.body
    try{
        const user=await User.signUp(id,password)
        res.status(200).json(user)
    }
    catch(error){
        res.status(400).json(error.message)
    }

}

module.exports={registerUser,loginUser}