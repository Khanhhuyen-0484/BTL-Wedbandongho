import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Filter, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import { menProducts as localProducts } from '../data/product';

import React from 'react';

const BrandList = () => {
  // Mảng các thương hiệu với tên và URL ảnh
  const brands = [
    { name: 'Rolex', image: '/img/rolex.png' },
    { name: 'Boss', image: '/img/1Balmain 2' },
    { name: 'amazfit', image: '/img/1Balmain 3.png' },
    { name: 'Audemars Piguet', image: '/img/AUDEMARS-PIGUET_1.png' },
    { name: 'DIESEL', image: '/img/1Balmain 5.png' },
    { name: 'Casio', image: '/img/1Balmain 4.png' },
    { name: 'BALMAIN', image: '/img/1Balmain 1.png' },
    { name: 'Hublot', image: 'https://example.com/hublot-logo.png' },
    { name: 'Longines', image: 'https://example.com/longines-logo.png' }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Brands</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-center items-center mb-4">
                <img src={brand.image} alt={brand.name} className="h-16 w-16 object-contain" />
              </div>
              <h3 className="text-xl font-semibold text-center">{brand.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandList;