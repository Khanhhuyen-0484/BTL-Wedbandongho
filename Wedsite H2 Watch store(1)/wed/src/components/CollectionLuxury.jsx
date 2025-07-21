import React from 'react';
import ProductGrid from './ProductGrid';
import { menProducts } from '../data/product';

const luxuryProducts = menProducts.filter(product => product.collection === 'luxury');

const CollectionLuxury = () => {
  return <ProductGrid title="Luxury Collection" products={luxuryProducts} />;
};

export default CollectionLuxury; 