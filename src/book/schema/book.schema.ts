import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
    isbn: { type: String, required: true },
    title: { type: String, required: true },
    city: { type: String, required: true },
    bookFile: { type: mongoose.Schema.Types.ObjectId, ref: 'book-files', required: false, default: null },
    author: { type: String, required: true },
    publicationDate: { type: Number, required: true },
    editorial: { type: String, required: true },
    edition: { type: Number, required: true },
    numPages: { type: Number, default: 0 },
    description: { type: String, required: false },
    status: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    registrationDate: { type: Date, required: true, default: new Date() },
    takenBy: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: false, default: null }
}, { timestamps: true });

BookSchema.index({isbn: 1}, {unique: true});