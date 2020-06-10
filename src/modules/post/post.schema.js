const { Schema } = require("mongoose");

const PostSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true, },
    status: { type: Boolean, default: 1 },
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = PostSchema