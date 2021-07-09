const UserModel = require('../models/userModel.js')

const bcrypt = require('bcrypt')
const uuid = require('uuid')

const mailService = require('./mailService.js')
const tokenService = require('./tokenService.js')

class UserService{
    async registration(email, password){
        const user = await UserModel.findOne({email})
        if (user){
            throw new Error('Пользователь с таким именем уже зарегестрирован')
        }
        const hash_password = await bcrypt.hash(password, 3)
        const activation_Link = uuid.v4()// random string // v34fa-asf32-dasf=dasdas 
        const new_user = await UserModel.create({email, password: hash_password, activation_Link})
        await mailService.sendActivationMail(email, activation_Link)
        const token_pair = tokenService.generateTokens
    }
}

module.exports = new UserService()