const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signUp = async function (id, password) {

    if(!id||!password){
        throw new Error('Please provide id and password')
    }
    else{
        if(!validator.isStrongPassword(password)){
            throw new Error('Password must contain at least 8 characters, 1 lowercase, 1 uppercase, 1 number and 1 symbol')
        }
    }

    const exists = await this.findOne({ id })
    if (exists) {
        throw new Error('User already exists')
    }
    else {
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await this.create({ id, password: hash })
        return user

    }
}
userSchema.statics.login=async function(id,password){
    if(!id||!password){
        throw new Error('Please provide id and password')
    }
    const user = await this.findOne({ id })
    if(!user){
        throw new Error('Invalid id')
    }
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch){
        throw new Error('Invalid password')
    }
    return user

}
module.exports = mongoose.model('User', userSchema)