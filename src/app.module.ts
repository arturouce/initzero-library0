import { HttpExceptionFilter } from './filter/http-exception.filter';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { APP_FILTER } from '@nestjs/core';
import { BookFilesModule } from './book-files/book-files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.URI_MONGODB),
    BookModule,
    UserModule,
    BookFilesModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    }
  ],
})
export class AppModule { }
