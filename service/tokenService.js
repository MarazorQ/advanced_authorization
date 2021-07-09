const jwt = require('jsonwebtoken')
const tokenModel = require('../models/tokenModel')

class TokenService{
    generateTokens(payload){
        const accessToken = jwt.sign(payload, process.env.JWT_SECRET_KEY_ACCESS, {expiresIn: '24h'})
        const refreshToken = jwt.sign(payload, process.env.JWT_SECRET_KEY_REFRESH, {expiresIn: '24d'})
        return {
            accessToken,
            refreshToken
        }
    }
    async saveToken(userID, refresh){
        const tokenData = await tokenModel.findOne({user: userID})
        if (tokenData){
            tokenData.refreshToken = refresh
            return tokenData.save()
        }
        const token = await tokenModel.create({user: userID, refresh})
        return token
    }
}

module.exports = new TokenService()