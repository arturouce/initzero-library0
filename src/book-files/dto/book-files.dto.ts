import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class BookFilesDTO {
    @IsNotEmpty()
    @IsString()
    fileName: string;
    @IsNotEmpty()
    file: string;
    @IsNotEmpty()
    @IsString()
    fileType: string;
    @IsNotEmpty()
    @IsNumber()
    fileSize: number;
    readonly description: string;
    readonly isActive: boolean;
    readonly createdAt: Date;
}