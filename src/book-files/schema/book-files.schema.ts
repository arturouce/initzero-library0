import * as mongoose from 'mongoose';

export const BookFilesSchema = new mongoose.Schema({
    fileName: { type: String, required: true },
    file: { type: String, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: Number, required: true },
    description: { type: String, required: false },
    isActive: { type: Boolean, default: true },
    createdAt: { type: String, default: new Date }
}, { timestamps: true });