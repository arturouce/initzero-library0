import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiBody,
    ApiConsumes,
    ApiOperation,
    ApiResponse,
    ApiTags,
  } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { BookService } from './book.service';
import { BookDTO } from './dto/book.dto';

@ApiTags('Book Operations')
@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService) { }

    @Post()
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: BookDTO })
    createBook(
        @UploadedFile() file: Express.Multer.File, @Body() bookDTO: BookDTO
    ) {

        return this.bookService.create(file, bookDTO);
    }

    @Put()
    @UseInterceptors(FileInterceptor('file'))
    @ApiConsumes('multipart/form-data')
    @ApiBody({ type: BookDTO })
    updateBook(
        @UploadedFile() file: Express.Multer.File, @Body() bookDTO: BookDTO
    ) {
        return this.bookService.update(file, bookDTO);
    }

    @Delete('id/:id')
    findById(@Param('id') id: string) {
        return this.bookService.delete(id);
    }

    @Get('id/:id')
    deleteBook(@Param('id') id: string) {
        return this.bookService.findById(id);
    }

    @Get('all')
    findAll() {
        return this.bookService.findAll();
    }

    @Get('isbn/:isbn')
    findByIsbn(@Param('isbn') isbn: string) {
        return this.bookService.findByIsbn(isbn);
    }

    @Get('title/:title')
    findByTitle(@Param('title') title: string) {
        return this.bookService.findByTitle(title);
    }
}
