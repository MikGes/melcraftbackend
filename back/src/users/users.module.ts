import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersSchema } from 'src/Models/users';
import { UsersController } from './users.controller';
import { UserService } from './users.service';
import { MailService } from 'src/mail/mail.service';
import { JwtModule } from '@nestjs/jwt';
import { FurnitureSchema } from 'src/Models/furniture';
import { Requests } from 'src/Models/requests';
@Module({
    imports: [JwtModule.register({
      global: true,
      secret: "asdasdasdasd",
      signOptions: { expiresIn: '60s' },
    }),MongooseModule.forFeature([{ name: 'users', schema: UsersSchema },{name:"request", schema:Requests},{name:'furniture', schema:FurnitureSchema}])],
    controllers: [UsersController],
    providers: [UserService, MailService]
})
export class UsersModule { }
