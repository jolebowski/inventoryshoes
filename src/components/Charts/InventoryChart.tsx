import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Product } from '../../types/inventory';

interface InventoryChartProps {
  products: Product[];
}

export const InventoryChart: React.FC<InventoryChartProps> = ({ products }) => {
  const categoryData = products.reduce((acc: any[], product) => {
    const existingCategory = acc.find(item => item.category === product.category);
    if (existingCategory) {
      existingCategory.quantity += product.quantity;
      existingCategory.value += product.quantity * product.price;
    } else {
      acc.push({
        category: product.category,
        quantity: product.quantity,
        value: product.quantity * product.price
      });
    }
    return acc;
  }, []);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Répartition des produits par catégorie</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={categoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="quantity" name="Quantité" fill="#8884d8" />
            <Bar yAxisId="right" dataKey="value" name="Valeur (€)" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};