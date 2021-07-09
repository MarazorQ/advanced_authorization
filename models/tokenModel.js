const {Schema, model} = require('mongoose')

const TokenSchema = new Schema({
    userID: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String},
})

module.exports = model('Token', TokenSchema)