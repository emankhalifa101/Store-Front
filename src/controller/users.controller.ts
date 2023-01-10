import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";


const userModel =  new UserModel();

const createUser = async (req:Request , res: Response, next: NextFunction) => {
    try {
        const user = await userModel.addNewUser(req.body);
        res.json({
            status: "200",
            data: user,
            messege: 'congratulations user added successfully ^^'
        })
    } catch (error) {
        next(error);  
    }
}

const getAllUsers =async (_req:Request , res: Response , next: NextFunction) => {
    try {
        const allUsers = await userModel.selectAllUsers();
        res.json({
            status: "200",
            data: allUsers,
            messege: 'congratulations'
        })
        
    } catch (error) {
        next(error)
        
    }
    
}
const getUser =async (req:Request , res: Response , next: NextFunction) => {
    try {
        console.log('req',req.params.id);
        const user = await userModel.selectUser(parseInt(req.params.id));
        res.json({
            status: "200",
            data: user,
            messege: 'congratulations'
        })
        
    } catch (error) {
        next(error)  
    }
    
}
const updateUser =async (req:Request, res: Response, next:NextFunction) => {
    try {
        console.log('req',req.body);
        const user = await userModel.updateUser(req.body);
        res.json({
            status: "200",
            data: user,
            messege: 'congratulations user updated'
        })
        
    } catch (error) {
        next(error)  
    } 
}
const deleteUser =async (req:Request, res: Response, next:NextFunction) => {
    try {
        console.log('req',req.body);
        const user = await userModel.deleteUser(parseInt(req.params.id));
        res.json({
            status: "200",
            data: user,
            messege: 'congratulations user deleted'
        })
        
    } catch (error) {
        next(error)  
    } 
}

export {
    getAllUsers,
    createUser,
    getUser,
    updateUser,
    deleteUser  
}