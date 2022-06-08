const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserDetail = new Schema(
    {
        fName: { type: String, required: true },
        lName: { type: String, required: true },
        age: { type: Number, required: true },
        pNumber: { type: String, required: true },
        email: { type: String, required: true },
        ease: { type: Number, required: true },
        comfort: { type: Number, required: true },
        recommend: { type: String, required: true },   
    },
    { timestamps: true },
)

module.exports = mongoose.model('userDetails', UserDetail, 'userDetails')