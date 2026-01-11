import { Schema, model, Document } from "mongoose";

/* =====================
   TypeScript Interface
===================== */

export interface ISubscriptionPlan extends Document {
  planName: string;
  amount: number;
  currency: string;
  interval: "day" | "week" | "month" | "year" | null;
  intervalCount: number | null;
  productId: string;
  priceId: string;
  active: boolean;
  description: string;
  features: string[];
  planType: "subscription" | "one_time";
  totalSubscribers: number;
  createdAt: Date;
  updatedAt: Date;
}

/* =====================
   Mongoose Schema
===================== */

const SubscriptionPlanSchema = new Schema<ISubscriptionPlan>(
  {
    planName: {
      type: String,
      required: true,
      trim: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      required: true,
      lowercase: true,
      enum: ["eur", "usd", "gbp"],
    },

    interval: {
      type: String,
      enum: ["day", "week", "month", "year", null],
      default: null,
    },

    intervalCount: {
      type: Number,
      default: null,
      min: 1,
    },

    productId: {
      type: String,
      required: true,
      index: true,
    },

    priceId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    active: {
      type: Boolean,
      default: true,
    },

    description: {
      type: String,
      required: true,
    },

    features: {
      type: [String],
      default: [],
    },

    planType: {
      type: String,
      enum: ["subscription", "one_time"],
      required: true,
    },

    totalSubscribers: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true, // auto adds createdAt & updatedAt this is good
    versionKey: false,
  }
);

/* =====================
   Export Model
===================== */

export const SubscriptionPlan = model<ISubscriptionPlan>(
  "SubscriptionPlan",
  SubscriptionPlanSchema
);
