import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Product } from '../../types/inventory';

interface StockAlertsProps {
  products: Product[];
}

export const StockAlerts: React.FC<StockAlertsProps> = ({ products }) => {
  const lowStockProducts = products.filter(
    (product) => product.quantity <= product.criticalThreshold
  );

  if (lowStockProducts.length === 0) return null;

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <AlertTriangle className="h-5 w-5 text-yellow-400" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">
            Alertes de stock
          </h3>
          <div className="mt-2 text-sm text-yellow-700">
            <ul className="list-disc pl-5 space-y-1">
              {lowStockProducts.map((product) => (
                <li key={product.id}>
                  {product.name} - {product.quantity} unités restantes
                  {product.quantity === 0 && " (RUPTURE DE STOCK)"}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};