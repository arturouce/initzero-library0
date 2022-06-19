import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    mail: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: String, required: true },
    birthDay: { type: Date, required: true },
    address: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    registrationDate: { type: Date, required: true, default: new Date() },
    password: { type: String, required: true },
    userType: { type: Number, required: true, default: 2 }
}, { timestamps: true });

UserSchema.index({mail: 1}, {unique: true});