import React from 'react';
import { useLocation } from 'react-router-dom';
import { menProducts } from '../data/product';
import { products as otherProducts } from '../data';
import ProductGrid from './ProductGrid';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResultPage = () => {
  const query = useQuery();
  const keyword = query.get('q')?.toLowerCase() || '';

  // Gộp tất cả sản phẩm
  const allProducts = [
    ...menProducts,
    ...otherProducts.filter(
      p => !menProducts.some(mp => mp.id === p.id)
    )
  ];

  // Lọc sản phẩm theo tên hoặc mô tả chứa từ khóa
  const filtered = allProducts.filter(product =>
    product.name?.toLowerCase().includes(keyword) ||
    product.description?.toLowerCase().includes(keyword)
  );

  return (
    <ProductGrid
      title={
        keyword
          ? `Kết quả tìm kiếm cho "${keyword}" (${filtered.length} sản phẩm)`
          : 'Tất cả sản phẩm'
      }
      products={filtered}
    />
  );
};

export default SearchResultPage; 