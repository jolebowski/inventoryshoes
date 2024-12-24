import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Product } from '../../types/inventory';

interface ProductActionsProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (product: Product) => void;
}

export const ProductActions: React.FC<ProductActionsProps> = ({ product, onEdit, onDelete }) => {
  return (
    <div className="flex space-x-2">
      <button
        onClick={() => onEdit(product)}
        className="p-1 text-blue-600 hover:text-blue-800"
        title="Modifier"
      >
        <Edit2 className="h-4 w-4" />
      </button>
      <button
        onClick={() => onDelete(product)}
        className="p-1 text-red-600 hover:text-red-800"
        title="Supprimer"
      >
        <Trash2 className="h-4 w-4" />
      </button>
    </div>
  );
};