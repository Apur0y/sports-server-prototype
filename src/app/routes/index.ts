import { Router } from "express";
import { createUserController, deleteUser, getUsers, updateInfo } from "../modules/user/user.controler";

export const router = Router();

router.post("/create-user", createUserController);
router.get("/get-users", getUsers);
router.put("/update-users/:id", updateInfo);
router.put("/delete-user/:id", deleteUser);
// router.put("/get-user/:id", deleteUser);