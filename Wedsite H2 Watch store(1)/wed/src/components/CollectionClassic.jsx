import React from 'react';
import ProductGrid from './ProductGrid';
import { menProducts } from '../data/product';

const classicProducts = menProducts.filter(product => product.collection === 'classic');

const CollectionClassic = () => {
  return <ProductGrid title="Classic Collection" products={classicProducts} />;
};

export default CollectionClassic; 