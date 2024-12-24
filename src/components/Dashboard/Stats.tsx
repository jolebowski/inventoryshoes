import React from 'react';
import { EuroIcon, Package, PackageX, Wallet } from 'lucide-react';
import { InventoryStats } from '../../types/inventory';

interface StatsProps {
  stats: InventoryStats;
}

export const Stats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <Package className="h-8 w-8 text-blue-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Produits totaux</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalProducts}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <PackageX className="h-8 w-8 text-red-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Produits en rupture</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.outOfStock}</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center">
          <EuroIcon className="h-8 w-8 text-green-500" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-500">Valeur totale</p>
            <p className="text-2xl font-semibold text-gray-900">{stats.totalValue.toLocaleString()} €</p>
          </div>
        </div>
      </div>
    </div>
  );
};