// src/components/ProtectedRoute.jsx
import { useAuth } from '../contexts/AuthContext';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = ({
  roles = [], // Thêm kiểm tra role nếu cần
  redirectPath = '/login',
  children
}) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
      <p>Đang kiểm tra đăng nhập...</p>
    </div>;
  }

  // Kiểm tra đăng nhập
  if (!user) {
    return <Navigate 
      to={redirectPath} 
      state={{ from: location }} 
      replace 
    />;
  }

  // Kiểm tra role nếu có yêu cầu
  if (roles.length > 0 && !roles.includes(user.role)) {
    return <Navigate 
      to="/unauthorized" 
      state={{ from: location }} 
      replace 
    />;
  }

  // Render children nếu có, không thì render Outlet
  return children ? children : <Outlet />;
};

export default ProtectedRoute;