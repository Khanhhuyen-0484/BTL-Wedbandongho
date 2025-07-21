// src/pages/ProfilePage.jsx
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Thông tin cá nhân</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-gray-600">Họ tên</label>
            <p className="text-lg font-medium">{user?.name}</p>
          </div>
          <div>
            <label className="block text-gray-600">Email</label>
            <p className="text-lg font-medium">{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;