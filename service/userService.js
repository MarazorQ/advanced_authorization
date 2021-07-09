const UserModel = require('../models/userModel.js')

const bcrypt = require('bcrypt')
const uuid = require('uuid')

const mailService = require('./mailService.js')
const tokenService = require('./tokenService.js')

const UserDTO = require('../dtos/userDTOS.js')

class UserService{
    async registration(email, password){
        const user = await UserModel.findOne({email: email})
        if (user){
            return 'Пользователь с таким именем уже зарегестрирован'
        }
        const hash_password = await bcrypt.hash(password, 1)
        const activation_Link = uuid.v4()// random string // v34fa-asf32-dasf=dasdas 

        const new_user = await UserModel.create({email, password: hash_password, activationLink: activation_Link})
        await mailService.sendActivationMail(email, `${process.env.API_URL}api/activate/${activation_Link}`)

        const user_dto = new UserDTO(new_user)// id, email, isActivated
        const token_pair = tokenService.generateTokens({...user_dto})
        await tokenService.saveToken(user_dto.id, token_pair.refreshToken)

        return {
            ...token_pair,
            user: user_dto
        }
    }
}

module.exports = new UserService()