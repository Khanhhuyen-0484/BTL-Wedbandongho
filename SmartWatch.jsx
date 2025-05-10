import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Filter, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import axios from 'axios';
import { menProducts as localProducts } from '../data/product';

const SmartWatch = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataSource, setDataSource] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    minRating: 0,
    condition: 'all'
  });
  const { addToCart } = useCart();

  // Hàm định dạng giá tiền
  const formatPrice = (price) => {
    const num = typeof price === 'string' ? 
      parseFloat(price.replace(/[^0-9.-]+/g, "")) : 
      Number(price);
    return isNaN(num) ? '$0.00' : `$${num.toFixed(2)}`;
  };

  // Chuẩn hóa dữ liệu sản phẩm
  const normalizeProducts = (products) => {
    return products.map(product => ({
      ...product,
      price: typeof product.price === 'number' ? product.price : parseFloat(product.price) || 0,
      rating: Math.min(5, Math.max(0, Number(product.rating) || 0))
    }));
  };

  // Fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiResponse = await axios.get(
          'https://660e99fb356b87a55c505d66.mockapi.io/men-products',
          { timeout: 5000 }
        );
        
        if (apiResponse.data?.length > 0) {
          const normalizedProducts = normalizeProducts(apiResponse.data);
          setAllProducts(normalizedProducts);
          setFilteredProducts(normalizedProducts);
          setDataSource('api');
          return;
        }
        throw new Error('API returned empty data');
      } catch (apiError) {
        console.warn('Using local data:', apiError.message);
        try {
          if (!localProducts || !Array.isArray(localProducts)) {
            throw new Error('Invalid local data');
          }
          
          const normalizedProducts = normalizeProducts(localProducts);
          setAllProducts(normalizedProducts);
          setFilteredProducts(normalizedProducts);
          setDataSource('local');
          setError('Using local data (API unavailable)');
        } catch (localError) {
          console.error('Local data error:', localError);
          setError('Failed to load products');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Apply filters
  useEffect(() => {
    const filtered = allProducts.filter(product => {
      const matchesPrice = product.price >= filters.priceRange[0] && 
                         product.price <= filters.priceRange[1];
      const matchesRating = product.rating >= filters.minRating;
      const matchesCondition = filters.condition === 'all' || 
                             product.condition === filters.condition;
      
      return matchesPrice && matchesRating && matchesCondition;
    });
    setFilteredProducts(filtered);
  }, [filters, allProducts]);

  const handleAddToCart = (product, e) => {
    e.preventDefault();
    addToCart(product);
  };

  const resetFilters = () => {
    setFilters({
      priceRange: [0, 1000],
      minRating: 0,
      condition: 'all'
    });
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading products...</p>
      </div>
    );
  }

  if (error && allProducts.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center">
        <div className={`p-4 mb-4 rounded-lg ${
          dataSource === 'local' ? 'bg-yellow-50 text-yellow-800' : 'bg-red-50 text-red-800'
        }`}>
          {error}
        </div>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Smart Watch</h2>
          
          <div className="flex items-center gap-4">
            {dataSource && (
              <span className="text-sm px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                {dataSource === 'api' ? 'Online data' : 'Local data'}
              </span>
            )}
            
            <button 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow hover:bg-gray-50 transition-colors"
            >
              {showFilters ? <X size={18} /> : <Filter size={18} />}
              Filters
            </button>
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Price Range Filter */}
              <div>
                <h3 className="font-medium mb-3">Price Range ({formatPrice(filters.priceRange[0])} - {formatPrice(filters.priceRange[1])})</h3>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[0]}
                    onChange={(e) => setFilters({
                      ...filters,
                      priceRange: [parseInt(e.target.value), filters.priceRange[1]]
                    })}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1000"
                    step="10"
                    value={filters.priceRange[1]}
                    onChange={(e) => setFilters({
                      ...filters,
                      priceRange: [filters.priceRange[0], parseInt(e.target.value)]
                    })}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <h3 className="font-medium mb-3">Minimum Rating</h3>
                <div className="flex items-center gap-2">
                  {[0, 1, 2, 3, 4, 5].map(rating => (
                    <button
                      key={rating}
                      onClick={() => setFilters({...filters, minRating: rating})}
                      className={`p-2 rounded-full ${
                        filters.minRating === rating 
                          ? 'bg-yellow-400 text-white' 
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {rating === 0 ? 'All' : rating}
                    </button>
                  ))}
                </div>
              </div>

              {/* Condition Filter */}
              <div>
                <h3 className="font-medium mb-3">Condition</h3>
                <div className="flex flex-wrap gap-2">
                  {['all', 'new', 'used'].map(condition => (
                    <button
                      key={condition}
                      onClick={() => setFilters({...filters, condition})}
                      className={`px-4 py-2 rounded-full capitalize ${
                        filters.condition === condition
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={resetFilters}
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {filteredProducts.map(product => (
                <Link 
                  key={product.id}
                  to={`/product/${product.id}`} 
                  className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={product.image || '/placeholder-watch.jpg'} 
                      alt={product.name} 
                      className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = '/placeholder-watch.jpg';
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex space-x-2">
                        <button 
                          onClick={(e) => handleAddToCart(product, e)}
                          className="bg-white p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
                          aria-label="Add to cart"
                        >
                          <ShoppingCart size={18} />
                        </button>
                        <button 
                          className="bg-white p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300"
                          aria-label="Add to wishlist"
                        >
                          <Heart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={16} 
                          className={i < product.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} 
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 hover:text-green-500 line-clamp-2 min-h-[3rem]">
                      {product.name}
                    </h3>
                    <p className="text-green-500 font-bold mt-2">
                      {formatPrice(product.price)}
                    </p>
                    {product.condition && (
                      <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                        product.condition === 'new' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {product.condition === 'new' ? 'New' : 'Used'}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">Showing {filteredProducts.length} of {allProducts.length} products</span>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products match your filters</p>
            <button
              onClick={resetFilters}
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SmartWatch;