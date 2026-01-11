export type Currency = "eur" | "usd" | "gbp";

export type BillingInterval = "day" | "week" | "month" | "year";

export type PlanType = "subscription" | "one_time";

export interface SubscriptionPlan {
  id: string;
  planName: string;
  amount: number;
  currency: Currency;
  interval: BillingInterval | null;
  intervalCount: number | null;
  productId: string;
  priceId: string;
  active: boolean;
  description: string;
  features: string[];
  planType: PlanType;
  totalSubscribers: number;
  createdAt: string;
  updatedAt: string;
}
