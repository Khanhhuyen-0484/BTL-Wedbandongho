// src/components/OrderSuccess.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
        <div className="text-green-500 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-4">Đặt Hàng Thành Công!</h1>
        <p className="mb-6">Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ liên hệ với bạn sớm để xác nhận đơn hàng.</p>
        <Link
          to="/"
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Tiếp Tục Mua Sắm
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;