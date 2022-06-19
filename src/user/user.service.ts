import { UserDTO } from './dto/user.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/models/models';
import { Model } from 'mongoose';
import { IUser } from 'src/interface/user.interface';

@Injectable()
export class UserService {

    constructor(@InjectModel(USER.name) private readonly userModel: Model<IUser>) {}

    async create(user: UserDTO): Promise<IUser> {
        const newUser = new this.userModel({...user});
        return await newUser.save();
    }

    async findAll(): Promise<IUser[]> {
        return await this.userModel.find();
    }

    async update(id: string, user: UserDTO): Promise<IUser> {
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string): Promise<IUser> {
        return await this.userModel.findByIdAndDelete(id);
    }

    async findById(id: string): Promise<IUser> {
        return await this.userModel.findById(id);
    }

    async findByName(name: string): Promise<IUser[]> {
        return await this.userModel.find().where('fullName').regex(name);
    }

    async findByMail(email: string): Promise<IUser[]> {
        return await this.userModel.find().where('email').equals(email);
    }
}
