import './App.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroBanner from './components/HeroBanner';
import ProductGrid from './components/ProductGrid';
import BrandFilter from './components/BrandFilter';
import CollectionShowcase from './components/CollectionShowcase';
import ProductDetail from './components/ProductDetail';
import { products, brands } from './data';
import { CartProvider } from './contexts/CartContext';
import CartPage from './components/CartPage';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage'; 
import ProductMen from './components/ProductMen';
import ProductFemale from './components/ProductFemale';
import PaymentPage from './components/PaymentPage';
import OrderSuccess from './components/OrderSuccess';

const HomePage = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);

  const handleBrandChange = (brandId) => {
    setSelectedBrands(prev => 
      prev.includes(brandId) 
        ? prev.filter(id => id !== brandId) 
        : [...prev, brandId]
    );
  };

  return (
    <>
      <HeroBanner />
      <ProductGrid title="BEST SELLERS" products={products} />
      <BrandFilter 
        brands={brands} 
        selectedBrands={selectedBrands} 
        onBrandChange={handleBrandChange} 
      />
      <CollectionShowcase />
    </>
  );
};

const App = () => {
  return (
    <AuthProvider> {/* Bọc toàn bộ ứng dụng bằng AuthProvider */}
      <CartProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/productmen" element={<ProductMen />} />
                <Route path="/productfemale" element={<ProductFemale />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Các route được bảo vệ */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<ProfilePage />} />
                  {/* Thêm các route cần đăng nhập khác tại đây */}
                </Route>
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;