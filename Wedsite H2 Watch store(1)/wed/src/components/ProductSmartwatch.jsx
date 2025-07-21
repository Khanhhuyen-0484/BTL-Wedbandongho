import React from 'react';
import ProductGrid from './ProductGrid';
import { menProducts } from '../data/product';

const smartwatchProducts = menProducts.filter(product =>
  product.name.toLowerCase().includes('smartwatch')
);

const ProductSmartwatch = () => {
  return (
    <ProductGrid title="Smartwatch" products={smartwatchProducts} />
  );
};

export default ProductSmartwatch; 