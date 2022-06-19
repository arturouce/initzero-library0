import { UserSchema } from './schema/user.schema';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { USER } from '../models/models';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
	imports: [
		MongooseModule.forFeatureAsync([{
			name: USER.name,
			useFactory: () => {
				return UserSchema;
			}
		}])
	],
	controllers: [UserController],
	providers: [UserService]
})
export class UserModule { }
