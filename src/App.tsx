import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { Stats } from './components/Dashboard/Stats';
import { ProductList } from './components/Products/ProductList';
import { InventoryChart } from './components/Charts/InventoryChart';
import { AddEditProduct } from './components/Products/AddEditProduct';
import { StockAlerts } from './components/Alerts/StockAlerts';
import { products as initialProducts, getInventoryStats } from './data/mockData';
import { Product } from './types/inventory';

function App() {
  const [products, setProducts] = useState(initialProducts);
  const [showAddEdit, setShowAddEdit] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  
  const stats = getInventoryStats();

  const handleAddEdit = (productData: Omit<Product, 'id'>) => {
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...productData, id: editingProduct.id }
          : p
      ));
    } else {
      // Add new product
      const newProduct = {
        ...productData,
        id: Date.now().toString(),
      };
      setProducts([...products, newProduct]);
    }
    setShowAddEdit(false);
    setEditingProduct(undefined);
  };

  const handleDelete = (product: Product) => {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${product.name} ?`)) {
      setProducts(products.filter(p => p.id !== product.id));
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setShowAddEdit(true);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header className="mb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-900">
                Gestion d'Inventaire - Boutique de Chaussures
              </h1>
              <button
                onClick={() => setShowAddEdit(true)}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                <PlusCircle className="h-5 w-5 mr-2" />
                Nouveau Produit
              </button>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <StockAlerts products={products} />
            <Stats stats={stats} />
            
            {showAddEdit ? (
              <AddEditProduct
                product={editingProduct}
                onSave={handleAddEdit}
                onCancel={() => {
                  setShowAddEdit(false);
                  setEditingProduct(undefined);
                }}
              />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <ProductList
                    products={products}
                    onEdit={handleEdit}
                    onDelete={handleDelete}
                  />
                </div>
                <div className="lg:col-span-1">
                  <InventoryChart products={products} />
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;