import { BookFilesSchema } from './schema/book-files.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookFilesController } from './book-files.controller';
import { BookFilesService } from './book-files.service';
import { BOOK_FILE } from 'src/models/models';

@Module({
	imports: [
		MongooseModule.forFeatureAsync([{
			name: BOOK_FILE.name,
			useFactory: () => {
				return BookFilesSchema;
			}
		}])
	],
	controllers: [BookFilesController],
	providers: [BookFilesService],
	exports: [BookFilesService]
})
export class BookFilesModule { }
