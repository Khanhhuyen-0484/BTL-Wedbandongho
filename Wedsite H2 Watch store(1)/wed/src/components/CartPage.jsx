// src/components/CartPage.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Thêm useNavigate
import { useCart } from '../contexts/CartContext';
import { X, Plus, Minus } from 'lucide-react';

const CartPage = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity,
    totalItems,
    totalPrice
  } = useCart();

  const navigate = useNavigate(); // Thêm hook này

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link 
            to="/" 
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-transform duration-300 active:scale-95"
          >
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Danh sách sản phẩm */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow divide-y">
              {cartItems.map(item => (
                <div key={item.id} className="p-4 flex">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-24 h-24 object-contain"
                  />
                  <div className="flex-1 ml-4">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{item.name}</h3>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        <X size={18} />
                      </button>
                    </div>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 border rounded-l"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="px-4 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 border rounded-r"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tổng thanh toán */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Hóa Đơn</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Sản phẩm ({totalItems})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Tổng</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              {/* Sửa nút Thanh Toán thành dùng navigate */}
              <button 
                onClick={() => navigate('/payment')}
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
              >
                Thanh Toán
              </button>
              <Link 
                to="/" 
                className="block text-center text-blue-600 hover:underline mt-4"
              >
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;