import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { UserService } from './user.service';
import {
    ApiTags,
    ApiBody
  } from '@nestjs/swagger';

@ApiTags('User Operations')
@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    @ApiBody({ type: UserDTO })
    createUser(@Body() user: UserDTO) {
        return this.userService.create(user);
    }

    @Put()
    @ApiBody({ type: UserDTO })
    updateUser(@Body() user: UserDTO, @Query("id") id: string) {
        return this.userService.update(id, user);
    }

    @Delete('id/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.delete(id);
    }

    @Get('id/:id')
    findById(@Param('id') id: string) {
        return this.userService.findById(id);
    }

    @Get('all')
    findAll() {
        return this.userService.findAll();
    }

    @Get('name/:name')
    findByName(@Param('name') name: string) {
        return this.userService.findByName(name);
    }

    @Get('mail/:mail')
    findByMail(@Param('mail') mail: string) {
        return this.userService.findByMail(mail);
    }
}
