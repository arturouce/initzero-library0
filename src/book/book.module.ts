import { BookFilesModule } from './../book-files/book-files.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BOOK } from '../models/models';
import { BookSchema } from './schema/book.schema';
import { BookFilesService } from 'src/book-files/book-files.service';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([{
      name: BOOK.name,
      useFactory: () => BookSchema.plugin(require('mongoose-autopopulate'))
    }]),
    BookFilesModule
  ],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
