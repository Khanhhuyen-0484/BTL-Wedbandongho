import React from 'react';
import { createContext, useState, useEffect } from 'react'; // Thêm React vào import
import axios from 'axios';


const API_URL = 'http://localhost:5000/api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('token');
        if (token) {
          const res = await axios.get(`${API_URL}/profile`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.error('Lỗi kiểm tra xác thực:', err);
        localStorage.removeItem('token');
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  const register = async (formData) => {
    try {
      const res = await axios.post(`${API_URL}/register`, formData);
      if (res.data.userId) {
        return true;
      }
    } catch (err) {
      console.error('Lỗi đăng ký:', err);
      throw err;
    }
  };

  const login = async (formData) => {
    try {
      const res = await axios.post(`${API_URL}/login`, formData);
      localStorage.setItem('token', res.data.token);
      setUser(res.data.user);
      setIsAuthenticated(true);
      return true;
    } catch (err) {
      console.error('Lỗi đăng nhập:', err);
      throw err;
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext); // Sử dụng React.useContext