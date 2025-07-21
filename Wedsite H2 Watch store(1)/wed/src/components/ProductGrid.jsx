import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add('animate-fade-in');
    }
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Ngăn chặn chuyển hướng khi nhấn nút
    addToCart(product);
    // Hiệu ứng lắc nút khi click
    const btn = e.currentTarget;
    btn.classList.remove('animate-shake');
    void btn.offsetWidth; // trigger reflow
    btn.classList.add('animate-shake');
  };

  return (
    <Link 
      to={`/product/${product.id}`} 
      ref={cardRef}
      className="block bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-300 group opacity-0"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-64 object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="flex space-x-2">
            <button 
              onClick={handleAddToCart}
              className="bg-white p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 active:scale-95 focus:outline-none animate-none"
              aria-label="Add to cart"
              type="button"
            >
              <ShoppingCart size={18} />
            </button>
            <button 
              className="bg-white p-2 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300 active:scale-95 focus:outline-none"
              aria-label="Add to wishlist"
              type="button"
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
        <p className="text-green-500 font-bold mt-2">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};

const ProductGrid = ({ title, products }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-4">
                
                <span className="text-gray-600">Page 1 of 2</span>
                
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No products found</p>
            <Link 
              to="/" 
              className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;