import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FurnitureSchema } from 'src/Models/furniture';
import { UsersSchema } from 'src/Models/users';

@Module({
  imports:[MongooseModule.forFeature([{name:'furniture', schema:FurnitureSchema},{name:'users',schema:UsersSchema}])],
  providers: [AdminService],
  controllers: [AdminController]
})
export class AdminModule {}
