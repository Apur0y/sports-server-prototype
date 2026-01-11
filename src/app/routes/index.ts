import { Router } from "express";
import { createUserController, deleteUser, getUsers, updateInfo, upload, uploadPicture } from "../modules/user/user.controler";
import {
	createPackage,
	getPackages,
	getPackage,
	updatePackageController,
	deletePackageController,
} from "../modules/packages/package.controler";

export const router = Router();

// User routes
router.post("/create-user", createUserController);
router.get("/get-users", getUsers);
router.put("/update-users/:id", updateInfo);
router.put("/delete-user/:id", deleteUser);
// router.put("/get-user/:id", deleteUser);
router.post("/upload-picture", upload.single("picture"), uploadPicture);

// Package routes
router.post("/packages", createPackage);
router.get("/packages", getPackages);
router.get("/packages/:id", getPackage);
router.put("/packages/:id", updatePackageController);
router.delete("/packages/:id", deletePackageController);