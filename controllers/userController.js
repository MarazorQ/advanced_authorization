const userService = require('../service/userService.js')

class UserController{
    async registration(req, res, next){
        try{
            const {email, password} = req.body
            const user_data = await userService.registration(email, password)
            //refresh
            res.cookie('refreshToken', user_data.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})// 30d
            return res.json(user_data)
        }catch(e){

        }
    }
    async login(req, res, next){
        try{

        }catch(e){

        }
    }
    async logout(req, res, next){
        try{

        }catch(e){

        }
    }
    async refresh(req, res, next){
        try{

        }catch(e){

        }
    }
    async activate(req, res, next){
        try{

        }catch(e){

        }
    }
    async getUsers(req, res, next){
        try{
            res.json('test controller')
        }catch(e){

        }
    }

}

module.exports = new UserController()