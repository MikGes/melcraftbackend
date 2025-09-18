import { Body, Controller, Get, Param, Post, Res } from "@nestjs/common";
import { UserService } from "./users.service";
import { Response } from "express";
@Controller("users")
export class UsersController {
    constructor(private readonly userService: UserService) { }
    @Post("createUser")
    async CreateUser(@Res() res: Response, @Body() userDetail: any) {
        await this.userService.CreateUser(res, userDetail)
    }
    @Get("verify_email/:token")
    async VerifyEmail(@Res() res: Response, @Param("token") emailToken) {
        await this.userService.VerifyEmail(res, emailToken)
    }
    @Post("/login")
    async LoginUser(@Res() res:Response,@Body() creds){
        await this.userService.LoginUser(res,creds)
    }
    @Get('furnitures')
    async GetFurnitures(@Res() res:Response){
        await this.userService.GetFurnitures(res)
    }
    @Post('order/:furnitureId')
    async OrderFurniture(@Res() res:Response, @Body() customer, @Param('furnitureId') furnitureId){
        await this.userService.OrderFurniture(res,furnitureId,customer)
    }
}