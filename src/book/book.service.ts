import { BookFilesDTO } from './../book-files/dto/book-files.dto';
import { BookFilesService } from './../book-files/book-files.service';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { IBook } from '../interface/book.interface';
import { BookDTO } from './dto/book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BOOK, USER } from 'src/models/models';
import { Model } from 'mongoose';

@Injectable()
export class BookService {

    constructor(
        @InjectModel(BOOK.name) private readonly model: Model<IBook>,
        private readonly bookfilesService: BookFilesService
    ) { }

    async create(file, bookDTO: BookDTO): Promise<IBook> {

        const bookFile: BookFilesDTO = new BookFilesDTO();

        let newBookFile = null;

        console.log(file)

        if (file) {
            bookFile.fileName = bookDTO.title;
            bookFile.file = file.buffer.toString('base64');
            bookFile.fileType = file.mimetype;
            bookFile.fileSize = file.size;

            newBookFile = await this.bookfilesService.create(bookFile);
        }

        let bookFileId = (newBookFile) ? newBookFile.id.toString() : null;

        const newBook = new this.model({ ...bookDTO, bookFile: bookFileId });

        return await (await newBook.populate('bookFile')).save();
    }

    async findAll(): Promise<IBook[]> {
        return await this.model.find().populate('takenBy').populate('bookFile').sort({'createdAt': -1});
    }

    async update(file, bookDTO: BookDTO): Promise<IBook> {

        const bookFile: BookFilesDTO = new BookFilesDTO();

        let newBookFile = null;
        
        const bookSearch = await this.model.findById(bookDTO.id);

        if (file) {
            bookFile.fileName = bookDTO.title;
            bookFile.file = file.buffer.toString('base64');
            bookFile.fileType = file.mimetype;
            bookFile.fileSize = file.size;

            if(bookSearch.bookFile) {
                newBookFile = await this.bookfilesService.findBookAndUpdate(
                    bookSearch.bookFile.toString(), bookFile
                );
            } else {
                newBookFile = await this.bookfilesService.create(bookFile);
            }
            
        }

        let takenBy = {
            takenBy: (bookDTO.takenBy) ? bookDTO.takenBy : null
        }

        let bookFileId = (newBookFile) ? newBookFile.id.toString() : bookSearch.bookFile.toString();
        
        const takenStatus = (bookDTO.takenBy) ? 'TAKEN' : bookDTO.status;

        return await this.model.findByIdAndUpdate(
            bookDTO.id, { ...bookDTO, status: takenStatus, bookFile: bookFileId, takenBy: (bookDTO.takenBy) ? bookDTO.takenBy : null }, { new: true }
        ).populate('bookFile');
    }

    async delete(id: string): Promise<IBook> {

        const deletedBook = await this.model.findByIdAndDelete(id)

        if(deletedBook.bookFile) {
            await this.bookfilesService.findBookFileAndDelete(deletedBook.bookFile)
        }
        
        return deletedBook;
    }

    async findById(id: string): Promise<IBook> {
        return await this.model.findById(id).populate('bookFile');
    }

    async findByIsbn(isbn: string): Promise<IBook[]> {
        const books = await this.model.find().where('isbn').equals(isbn).populate('bookFile');

        if (books.length < 1) {
            throw new HttpException('Book not found', HttpStatus.NOT_FOUND)
        }

        return books;
    }

    async findByTitle(name: string): Promise<IBook[]> {
        const booksByTitle = await this.model.find().where('title').regex(name).populate('bookFile');

        if (booksByTitle.length < 1) {
            throw new HttpException('Book not found', HttpStatus.NOT_FOUND)
        }

        return booksByTitle
    }
}
