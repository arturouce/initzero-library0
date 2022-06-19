import { BookFilesDTO } from './dto/book-files.dto';
import { IBookFiles } from './../interface/book-files.interface';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BOOK_FILE } from 'src/models/models';

@Injectable()
export class BookFilesService {

    constructor(@InjectModel(BOOK_FILE.name) private readonly bookFileModel: Model<IBookFiles>) {}

    async create(bookFile: BookFilesDTO): Promise<IBookFiles> {
        const newBookFile = new this.bookFileModel({...bookFile});
        return newBookFile.save();
    }

    async findBookFilesById(id: string): Promise<IBookFiles> {
        return await this.bookFileModel.findById(id);
    }

    async findBookAndUpdate(id: string, bookFile: BookFilesDTO): Promise<IBookFiles> {
        return await this.bookFileModel.findByIdAndUpdate(id, bookFile);
    }

    async findBookFileAndDelete(id: string): Promise<IBookFiles> {
        return await this.bookFileModel.findByIdAndDelete(id);
    }

    async findAllBookFiles(): Promise<IBookFiles[]> {
        return await this.bookFileModel.find();
    }
}
