import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { products } from '../data.js'; // Adjust the path to your JSON file
import { Link } from "react-router-dom";
import { products } from '../data';

const WomenWatches = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Ngăn chặn chuyển hướng khi nhấn nút
    addToCart(product);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Sản phẩm không tồn tại</h2>
        <Link 
          to="/" 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          ← Quay về trang chủ
        </Link>
      </div>
    );
  }

  const navigate = useNavigate();
  const [watches, setWatches] = useState([]);

  useEffect(() => {
    // Filter watches for women if needed
    const womenWatches = watchesData.filter((watch) => watch.category === "women");
    setWatches(womenWatches);
  }, []);

  const handleWatchClick = (id) => {
    navigate(`/product-detail/${id}`);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Breadcrumb navigation */}
      <div className="container mx-auto px-4 mb-8">
        <nav className="flex items-center text-sm text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition duration-200">Trang chủ</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-medium truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Product main content */}
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8">
            {/* Product image */}
            <div className="flex items-center justify-center bg-gray-50 rounded-lg p-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-96 object-contain transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Product info */}
            <div className="space-y-4">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">({product.rating}/5)</span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mt-2">
                <span className="text-3xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="py-4 border-t border-gray-200">
                <h3 className="text-lg font-semibold mb-2">Mô tả sản phẩm</h3>
                <p className="text-gray-700 leading-relaxed">
                  {product.description || 'Sản phẩm cao cấp với chất lượng tuyệt vời...'}
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <svg 
                    className="w-5 h-5 mr-2" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                    />
                  </svg>
                  Thêm vào giỏ
                </button>
                
                <button className="flex-1 border-2 border-gray-800 text-gray-800 hover:bg-gray-100 py-3 px-6 rounded-lg transition duration-300">
                  Mua ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WomenWatches;