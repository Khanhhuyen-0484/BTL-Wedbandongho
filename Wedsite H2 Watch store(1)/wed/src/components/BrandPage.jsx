import React from 'react';
import { brands } from '../data';

const brandDescriptions = {
  Rolex: 'Đỉnh cao của sự sang trọng và chính xác đến từ Thụy Sĩ.',
  Omega: 'Thương hiệu đồng hồ nổi tiếng với lịch sử chinh phục không gian.',
  'Tag Heuer': 'Phong cách thể thao, mạnh mẽ và đột phá công nghệ.',
  Seiko: 'Đồng hồ Nhật Bản bền bỉ, giá trị vượt thời gian.',
  Citizen: 'Công nghệ Eco-Drive, thân thiện môi trường.',
  Casio: 'Đồng hồ đa năng, trẻ trung, giá tốt.',
  Tissot: 'Tinh hoa đồng hồ Thụy Sĩ, giá hợp lý.',
  Longines: 'Thanh lịch, cổ điển, đậm chất châu Âu.',
  Hamilton: 'Phong cách Mỹ, chất lượng Thụy Sĩ.',
  Bulova: 'Đồng hồ Mỹ, thiết kế hiện đại, sáng tạo.',
};

const BrandPage = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-blue-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 animate-fade-in tracking-tight drop-shadow-lg">THƯƠNG HIỆU ĐỒNG HỒ NỔI BẬT</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fade-in text-lg" style={{animationDelay: '0.2s'}}>
            Khám phá các thương hiệu đồng hồ nổi tiếng trên thế giới với đa dạng phong cách và chất lượng vượt trội.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {brands.map((brand, idx) => (
            <div
              key={brand.id}
              className="flex flex-col items-center group opacity-0 animate-fade-in bg-white rounded-2xl border border-gray-100 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 relative overflow-hidden"
              style={{animationDelay: `${0.1 + idx * 0.07}s`}}
            >
              <div className="w-28 h-28 bg-gradient-to-tr from-green-100 via-white to-blue-100 rounded-full flex items-center justify-center shadow-lg mb-4 border-2 border-green-200 group-hover:scale-110 transition-transform duration-300">
                <img src={brand.logo} alt={brand.name} className="h-20 object-contain drop-shadow-md" />
              </div>
              <span className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors duration-300 mb-2 text-center">
                {brand.name}
              </span>
              <span className="text-sm text-gray-500 text-center">
                {brandDescriptions[brand.name] || 'Thương hiệu đồng hồ nổi bật, chất lượng và uy tín.'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPage; 