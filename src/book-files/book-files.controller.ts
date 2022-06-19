import { BookFilesDTO } from './dto/book-files.dto';
import { BookFilesService } from './book-files.service';
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';

@ApiTags('Book File Operations')
@Controller('book-file')
export class BookFilesController {

    constructor(private readonly bookFilesService: BookFilesService) {}

    @Post()
    createBookFile(@Body() bookFiles: BookFilesDTO) {
        return this.bookFilesService.create(bookFiles);
    }

    @Get('all') 
    findAllBookFiles() {
        return this.bookFilesService.findAllBookFiles();
    }

    @Get('id/{id}')
    findBookFileById(@Param('id') id: string) {
        return this.bookFilesService.findBookFilesById(id);
    }
}
