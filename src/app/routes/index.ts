import { Router } from "express";
import { createUserController, deleteUser, getUsers, updateInfo, upload, uploadPicture } from "../modules/user/user.controler";

export const router = Router();

router.post("/create-user", createUserController);
router.get("/get-users", getUsers);
router.put("/update-users/:id", updateInfo);
router.put("/delete-user/:id", deleteUser);
// router.put("/get-user/:id", deleteUser);
router.post("/upload-picture", upload.single("picture"), uploadPicture);