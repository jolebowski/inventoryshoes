export interface Product {
  id: string;
  name: string;
  reference: string;
  category: string;
  quantity: number;
  price: number;
  criticalThreshold: number;
  description: string;
  imageUrl: string;
}

export interface InventoryStats {
  totalProducts: number;
  outOfStock: number;
  totalValue: number;
}