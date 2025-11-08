// Shipping cost breakdown structure
export interface Pricing {
  oceanFreight: number;
  fuelSurcharge: number;
  documentation: number;
  portHandling: number;
  insurance: number;
  total: number;
}