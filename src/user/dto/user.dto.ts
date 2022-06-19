import { IsDateString, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "Armando Rojas Bahena", description: 'The Full name of the user', required: true})
    readonly fullName: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "correo@gmail.com", description: 'The e mail of the user', required: true})
    readonly mail: string;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "1234567890", description: 'The prhone of the user', required: true})
    readonly phone: string;
    @IsNotEmpty()
    @IsDateString()
    @ApiProperty({ example: "1990-11-11", description: 'The date of the user', required: true})
    readonly birthDay: Date;
    @IsNotEmpty()
    @IsString()
    @ApiProperty({ example: "", description: 'The addres of the user', required: true})
    readonly address: string;
    @ApiProperty({ example: "", description: 'The Number of the user: 1 for admin, 2 for user (default)', required: false})
    readonly userType: number;
    @ApiProperty({ example: "", description: 'The password of the user', required: true})
    readonly password: string;
    readonly registrationDate: Date;
} 