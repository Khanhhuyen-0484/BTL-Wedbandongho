import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, User, Heart, Menu, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'react-toastify';

const Header = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const { totalItems } = useCart();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      if (isMenuOpen) toggleMenu();
    } else {
      toast.warn('Vui lòng nhập từ khóa tìm kiếm!');
    }
  };

  const handleLogout = () => {
    logout();
    setShowUserDropdown(false);
    navigate('/login');
    if (isMenuOpen) toggleMenu();
    toast.success('Bạn đã đăng xuất thành công!');
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 max-w-7xl">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-gray-800 hover:text-green-600 transition-colors"
            >
              H2 WATCH
            </Link>
          </div>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/productmen"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Đồng hồ Nam
            </Link>
            <Link
              to="/productfemale"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Đồng hồ Nữ
            </Link>
            <Link
              to="/smart-watches"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Smart Watch
            </Link>
            <Link
              to="/collections"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Bộ sưu tập
            </Link>
            <Link
              to="/brands"
              className="text-gray-600 hover:text-green-600 transition-colors text-sm font-medium"
            >
              Thương hiệu
            </Link>
          </nav>

          {/* Phần bên phải - Tìm kiếm và các biểu tượng */}
          <div className="flex items-center space-x-3">
            {/* Thanh tìm kiếm - Desktop */}
            <div className="hidden md:block">
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Tìm kiếm..."
                    className="w-40 bg-gray-50 border border-gray-300 rounded-full py-1 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-green-600"
                  >
                    <Search size={16} />
                  </button>
                </div>
              </form>
            </div>

            {/* Các biểu tượng */}
            <div className="flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <User size={18} />
                    <span className="text-sm hidden lg:inline">
                      Xin chào, {user?.username || user?.name || 'Người dùng'}
                    </span>
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
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-green-600 transition-colors hidden md:block text-sm"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-600 hover:text-green-600 transition-colors hidden md:block text-sm"
                  >
                    Đăng ký
                  </Link>
                </div>
              )}

              <Link
                to="/wishlist"
                className="text-gray-600 hover:text-green-600 transition-colors hidden md:block"
              >
                <Heart size={18} />
              </Link>

              <Link
                to="/cart"
                className="text-gray-600 hover:text-green-600 transition-colors relative"
              >
                <ShoppingCart size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Nút menu mobile */}
              <button
                onClick={toggleMenu}
                className="text-gray-600 hover:text-green-600 md:hidden"
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 pb-3 space-y-3">
            <form onSubmit={handleSearchSubmit} className="mb-3">
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

            <nav className="flex flex-col space-y-2">
              <Link
                to="/productmen"
                className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                onClick={toggleMenu}
              >
                Đồng hồ Nam
              </Link>
              <Link
                to="/productfemale"
                className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                onClick={toggleMenu}
              >
                Đồng hồ Nữ
              </Link>
              <Link
                to="/smart-watches"
                className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                onClick={toggleMenu}
              >
                Smart Watch
              </Link>
              <Link
                to="/collections"
                className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                onClick={toggleMenu}
              >
                Bộ sưu tập
              </Link>
              <Link
                to="/brands"
                className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                onClick={toggleMenu}
              >
                Thương hiệu
              </Link>
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                    onClick={toggleMenu}
                  >
                    Tài khoản
                  </Link>
                  <Link
                    to="/cart"
                    className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                    onClick={toggleMenu}
                  >
                    Giỏ hàng
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
                    onClick={toggleMenu}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="text-gray-600 hover:text-green-600 px-2 py-1 text-sm"
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