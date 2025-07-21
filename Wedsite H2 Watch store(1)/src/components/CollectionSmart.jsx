import React from 'react';
import ProductGrid from './ProductGrid';
import { menProducts } from '../data/product';

const smartProducts = menProducts.filter(product => product.collection === 'smart');

const CollectionSmart = () => {
  return <ProductGrid title="Smart Collection" products={smartProducts} />;
};

export default CollectionSmart; 