const { Schema } = require("mongoose");

const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    status: { type: Boolean, default: 1 }
}, { timestamps: true });

module.exports = UserSchema