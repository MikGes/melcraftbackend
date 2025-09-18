import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';

@Controller('admin')
export class AdminController {
    constructor(private readonly adminService:AdminService){}
    @Get()
    async getAllusers(){

    }
    @Post("createFurniture")
    async CreateFurniture(@Res() res: Response,@Body() FurDetails){
        await this.adminService.createFurniture(res, FurDetails)
    } 
    @Get('users')
    async getAllUsers(@Res() res:Response){
        await this.adminService.getAllUsers(res)
    }
}
