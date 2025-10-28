import { Request, Response } from "express";
import { createUserService, deleteSingleUser, getAllUsers, updateUserInfo } from "./user.service";
import { success } from "zod";

/**
 * Controller: Create a new user
 */
export const createUserController = async (req: Request, res: Response) => {
  try {
    const userData = req.body;

    // Call service layer
    const newUser = await createUserService(userData);

    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: newUser,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || "Failed to create user",
    });
  }
};

export const getUsers=async(req:Request, res:Response)=>{
    
    const response = await getAllUsers();
    res.status(201).json({
      success: true,
      message: "User retrived successfully",
      data: response,
    });

}

export const updateInfo=async(req:Request, res:Response)=>{
    const {id}=req.params;
    const payload=req.body;
    const updatedInfo=await updateUserInfo(id,payload);
     res.status(201).json({
      success: true,
      message: "User updated successfully",
      data: updatedInfo,
    });
}

export const deleteUser = async(req:Request,res:Response)=>{
     
    const {id}=req.params;
    const deleteData =await deleteSingleUser(id);
    res.status(200).json({
        success:true,
        message:"User delete successfully!",
        body:deleteData
    })
}
