import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
   
  const { cartItems, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cartItems.length === 0) {
      alert('Giỏ hàng của bạn đang trống!');
      return;
    }

    setIsProcessing(true);

    try {
      // Giả lập quá trình thanh toán mất 1.5 giây
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Xóa giỏ hàng
      clearCart();
      
      // Chuyển hướng sang trang thành công và truyền dữ liệu đơn hàng
      navigate('/order-success', {
        state: {
          orderInfo: {
            customer: customerInfo,
            items: cartItems,
            total: totalPrice,
            paymentMethod,
            orderDate: new Date().toLocaleString()
          }
        }
      });
    } catch (error) {
      console.error('Lỗi thanh toán:', error);
      alert('Có lỗi xảy ra khi xử lý thanh toán');
    } finally {
      setIsProcessing(false);
    }
  };
 // Hàm định dạng tiền USD
  const formatUSD = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(amount);
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Thanh Toán</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form thông tin */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Thông Tin Khách Hàng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Họ và tên*</label>
                  <input
                    type="text"
                    required
                    className="w-full p-2 border rounded"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block mb-2">Số điện thoại*</label>
                  <input
                    type="tel"
                    required
                    className="w-full p-2 border rounded"
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block mb-2">Địa chỉ*</label>
                <input
                  type="text"
                  required
                  className="w-full p-2 border rounded"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2">Ghi chú</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="3"
                  value={customerInfo.note}
                  onChange={(e) => setCustomerInfo({...customerInfo, note: e.target.value})}
                />
              </div>
            </div>

            {/* Phương thức thanh toán */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Phương Thức Thanh Toán</h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'cod'}
                    onChange={() => setPaymentMethod('cod')}
                    className="h-5 w-5"
                  />
                  <span>Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === 'bank'}
                    onChange={() => setPaymentMethod('bank')}
                    className="h-5 w-5"
                  />
                  <span>Chuyển khoản ngân hàng</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={isProcessing || cartItems.length === 0}
              className={`w-full py-3 rounded-lg text-white ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : cartItems.length === 0 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {isProcessing ? 'Đang xử lý...' : 'Hoàn Tất Đơn Hàng'}
            </button>
          </form>
        </div>

        {/* Tóm tắt đơn hàng */}
        <div>
            <div className="bg-white p-6 rounded-lg shadow sticky top-4">
            <h2 className="text-xl font-bold mb-4">Hóa Đơn</h2>
            <div className="divide-y">
            {cartItems.map(item => (
         <div key={item.id} className="py-3 flex justify-between">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">Số lượng: {item.quantity}</p>
          </div>
          <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
    </div>
    <div className="border-t mt-4 pt-4">
      <div className="flex justify-between font-bold text-lg">
        <span>Tổng</span>
        <span className="text-green-600">${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default PaymentPage;