// src/contexts/AuthContext.jsx
import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Đăng nhập bằng email/password
  const login = async ({ email, password }) => {
    // Gọi API backend của bạn ở đây
    const mockUser = {
      id: 1,
      name: "Người dùng Demo",
      email: email
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  // Đăng nhập bằng mạng xã hội (giả lập)
  const socialLogin = async (provider) => {
    const mockUser = {
      id: 1,
      name: `User from ${provider}`,
      email: `${provider}@example.com`
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ 
      user,
      login,
      logout,
      socialLogin 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);