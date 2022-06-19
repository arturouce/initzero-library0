import { IUser } from 'src/interface/user.interface';
import { isAlphanumeric, IsAlphanumeric, IsNotEmpty, IsNumberString, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class BookDTO {
    @ApiProperty({ example: "", description: 'The id for the book', required: false})
    readonly id: string;
    @ApiProperty({ example: "sdddfd12343", description: 'The ISBN for the book' })
    @IsNotEmpty()
    @IsString()
    readonly isbn: string;
    @ApiProperty({ example: "Libro 1", description: 'The title of the book' })
    @IsNotEmpty()
    @IsString()
    readonly title: string;
    @ApiProperty({ example: "mexico", description: 'The city of the book' })
    @IsNotEmpty()
    @IsString()
    readonly city: string;
    @ApiProperty({ example: "Armando Suarez", description: 'The name of author for the book' })
    @IsNotEmpty()
    @IsString()
    readonly author: string;
    @ApiProperty({ example: "1990", description: 'The publiication year for the book' })
    @IsNotEmpty()
    @IsNumberString()
    readonly publicationDate: number;
    @ApiProperty({ example: "Santillan", description: 'The editorial for the book' })
    @IsNotEmpty()
    @IsString()
    readonly editorial: string;
    @ApiProperty({ example: "3", description: 'The edition for the book' })
    @IsNotEmpty()
    @IsNumberString()
    readonly edition: number;
    @ApiProperty({ example: "340", description: 'The number of pages for the book' })
    @IsNotEmpty()
    @IsNumberString()
    readonly numPages: number;
    @ApiProperty({ example: 'descripción', description: 'The description for the book', required: false })
    readonly description: string;
    @ApiProperty({ example: 'ACTIVE', description: 'The Status for the book' })
    @IsNotEmpty()
    @IsString()
    readonly status: string;
    @ApiProperty({ example: '21312312312312', description: 'The UserId for the book assigned', required: false })
    readonly takenBy: string;
    readonly registrationDate: Date;
    @ApiProperty({ type: 'string', format: 'binary', required: false })
    readonly file: Express.Multer.File;
}