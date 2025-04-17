import { useState } from "react";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-pink-200 shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-600">MyBeauty</div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            className="p-2 pl-10 border rounded-full w-80 focus:outline-none"
            placeholder="Tìm kiếm sản phẩm..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-3 text-gray-500" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <a href="#" className="hover:text-pink-600">Trang điểm</a>
          <a href="#" className="hover:text-pink-600">Chăm sóc da</a>
          <a href="#" className="hover:text-pink-600">Chăm sóc cơ thể</a>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 text-pink-600">
          <FiShoppingCart className="text-2xl cursor-pointer" />
          <FiUser className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
