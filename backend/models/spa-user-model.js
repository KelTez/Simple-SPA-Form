const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserDetail = new Schema(
    {
        fName:String,
        lName:String,
        product:String,
        pNumber:String,
        email:String,
        ease:Number,
        comfort:Number,
        recommend:String   
    },
    { timestamps: true },
)

module.exports = mongoose.model('userDetails', UserDetail)