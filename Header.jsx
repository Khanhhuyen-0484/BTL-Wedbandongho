import React, { useState } from 'react';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors">
              H2 WATCH
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/productmen" className="text-gray-600 hover:text-green-600 transition-colors">Nam</Link>
            <Link to="/productfemale" className="text-gray-600 hover:text-green-600 transition-colors">Nữ</Link>
            <Link to="/SmartWatch" className="text-gray-600 hover:text-green-600 transition-colors">Smart Watch</Link>
            <Link to="/collections" className="text-gray-600 hover:text-green-600 transition-colors">Bộ sưu tập</Link>
            <Link to="/BrandList" className="text-gray-600 hover:text-green-600 transition-colors">Thương hiệu</Link>
          </nav>

          {/* Right section - Search + Icons */}
          <div className="flex items-center space-x-4">
            {/* Thanh tìm kiếm nhỏ bên phải - Desktop */}
            <div className="hidden md:block">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm..."
                    className="w-48 bg-gray-50 border border-gray-300 rounded-full py-1 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600"
                  >
                    <Search size={18} />
                  </button>
                </div>
              </form>
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <User size={20} />
                    <span className="text-sm hidden lg:inline">{user.name}</span>
                  </button>
                  
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setShowUserDropdown(false)}
                      >
                        Tài khoản của tôi
                      </Link>
                      
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="text-gray-600 hover:text-green-600 transition-colors hidden md:block"
                >
                  <User size={20} />
                </Link>
              )}

              <Link 
                to="/wishlist" 
                className="text-gray-600 hover:text-green-600 transition-colors hidden md:block"
              >
                <Heart size={20} />
              </Link>
              
              <Link 
                to="/cart" 
                className="text-gray-600 hover:text-green-600 transition-colors relative"
              >
                <ShoppingCart size={20} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile menu button */}
              <button 
                onClick={toggleMenu}
                className="text-gray-600 hover:text-green-600 md:hidden"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <form onSubmit={handleSearchSubmit} className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Tìm kiếm sản phẩm..."
                  className="w-full bg-gray-50 border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600"
                >
                  <Search size={18} />
                </button>
              </div>
            </form>

            <nav className="flex flex-col space-y-3">
              <Link 
                to="/men" 
                className="text-gray-600 hover:text-green-600 px-2 py-1"
                onClick={toggleMenu}
              >
                Đồng hồ Nam
              </Link>
              <Link 
                to="/women" 
                className="text-gray-600 hover:text-green-600 px-2 py-1"
                onClick={toggleMenu}
              >
                Đồng hồ Nữ
              </Link>
              <Link 
                to="/smart-watches" 
                className="text-gray-600 hover:text-green-600 px-2 py-1"
                onClick={toggleMenu}
              >
                Smart Watch
              </Link>
              <Link 
                to="/collections" 
                className="text-gray-600 hover:text-green-600 px-2 py-1"
                onClick={toggleMenu}
              >
                Bộ sưu tập
              </Link>
              <Link 
                to="/brands" 
                className="text-gray-600 hover:text-green-600 px-2 py-1"
                onClick={toggleMenu}
              >
                Thương hiệu
              </Link>
              {user ? (
                <>
                  <Link 
                    to="/profile" 
                    className="text-gray-600 hover:text-green-600 px-2 py-1"
                    onClick={toggleMenu}
                  >
                    Tài khoản
                  </Link>
                  <button
                    onClick={() => {
                      logout();
                      toggleMenu();
                    }}
                    className="text-left text-gray-600 hover:text-green-600 px-2 py-1"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link 
                    to="/login" 
                    className="text-gray-600 hover:text-green-600 px-2 py-1"
                    onClick={toggleMenu}
                  >
                    Đăng nhập
                  </Link>
                  <Link 
                    to="/register" 
                    className="text-gray-600 hover:text-green-600 px-2 py-1"
                    onClick={toggleMenu}
                  >
                    Đăng ký
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;