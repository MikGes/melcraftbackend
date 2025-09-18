import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AdminService {
    constructor(@InjectModel("furniture") private readonly FurnitureTable,@InjectModel("users") private readonly UsersTable){}
    async createFurniture(res,furDetails){
        try {
            await this.FurnitureTable.create(furDetails)
            res.status(200).json({
                message:"Furniture created successfully",
                success:true
            })
        } catch (error) {
            res.status(500).json({
                message:"Cant't create furniture",
                success:false,
                error:error.message
            })
        }
    }
    async getAllUsers(res){
        try {
            const users = await this.UsersTable.find().populate("orders.ordered_furniture_id")
            return res.status(200).json({
                data:users,
                success:true,
            })
        } catch (error) {
               return res.status(500).json({
                message:"Can't fetch users",
                success:false,
                error:error.message
            })
        }
    }
}
