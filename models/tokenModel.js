const {Schema, model} = require('mongoose')

const TokenSchema = new Schema({
    userID: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String, required: true},
})

module.exports = model('User', UserSchema)