import { Request, Response, NextFunction } from "express";
import * as packageService from "./package.service";

export const createPackage = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const payload = req.body;
		const created = await packageService.createPackageService(payload);
		res.status(201).json({ success: true, data: created });
	} catch (err) {
		next(err);
	}
};

export const getPackages = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const data = await packageService.getAllPackages();
		res.json({ success: true, data });
	} catch (err) {
		next(err);
	}
};

export const getPackage = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const data = await packageService.getPackageById(id);
		res.json({ success: true, data });
	} catch (err) {
		next(err);
	}
};

export const updatePackageController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const payload = req.body;
		const updated = await packageService.updatePackage(id, payload);
		res.json({ success: true, data: updated });
	} catch (err) {
		next(err);
	}
};

export const deletePackageController = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const deleted = await packageService.deletePackage(id);
		res.json({ success: true, data: deleted });
	} catch (err) {
		next(err);
	}
};

export default {
	createPackage,
	getPackages,
	getPackage,
	updatePackageController,
	deletePackageController,
};
