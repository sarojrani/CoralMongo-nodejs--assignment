const mongoose=require("mongoose")

const userSchema = new mongoose.Schema({
    fullname: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, unique: true, trim: true },
    phone: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, min: 8, max: 15 }

}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)