import AppError from "../../errorHelpers/AppError";
import { SubscriptionPlan } from "./package.model";
import { SubscriptionPlan as TSubscriptionPlan } from "./package.interface";

/**
 * Create a new subscription plan
 */
export const createPackageService = async (payload: Partial<TSubscriptionPlan>) => {
  if (!payload || !payload.priceId) {
    throw new AppError(400, "Invalid payload: priceId is required");
  }

  const existing = await SubscriptionPlan.findOne({ priceId: payload.priceId });
  if (existing) {
    throw new AppError(409, "A plan with this priceId already exists");
  }

  const created = await SubscriptionPlan.create(payload as any);
  return created;
};

/**
 * Retrieve all plans (optionally could add pagination/filters later)
 */
export const getAllPackages = async () => {
  const data = await SubscriptionPlan.find();
  return data;
};

/**
 * Get a single plan by id
 */
export const getPackageById = async (id: string) => {
  if (!id) throw new AppError(400, "Invalid id");
  const plan = await SubscriptionPlan.findById(id);
  if (!plan) throw new AppError(404, "Subscription plan not found");
  return plan;
};

/**
 * Update a plan
 */
export const updatePackage = async (id: string, payload: Partial<TSubscriptionPlan>) => {
  if (!id) throw new AppError(400, "Invalid id");

  const existing = await SubscriptionPlan.findById(id);
  if (!existing) throw new AppError(404, "Subscription plan not found");

  const updated = await SubscriptionPlan.findByIdAndUpdate(id, payload as any, {
    new: true,
    runValidators: true,
  });

  return updated;
};

/**
 * Delete a plan
 */
export const deletePackage = async (id: string) => {
  if (!id) throw new AppError(400, "Invalid id");

  const existing = await SubscriptionPlan.findById(id);
  if (!existing) throw new AppError(404, "Subscription plan not found");

  const deleted = await SubscriptionPlan.findByIdAndDelete(id);
  return deleted;
};

export default {
  createPackageService,
  getAllPackages,
  getPackageById,
  updatePackage,
  deletePackage,
};
