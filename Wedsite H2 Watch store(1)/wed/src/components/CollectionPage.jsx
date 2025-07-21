import React from 'react';
import { Link } from 'react-router-dom';

const collections = [
  {
    name: 'Classic',
    image: '/img/divers-resized 1.png',
    description: 'Bộ sưu tập đồng hồ cổ điển, thiết kế thanh lịch, phù hợp mọi dịp.',
    link: '/collections/classic',
  },
  {
    name: 'Smart',
    image: '/img/Banner-img4.png',
    description: 'Đồng hồ thông minh hiện đại, nhiều tính năng sức khỏe và thể thao.',
    link: '/collections/smart',
  },
  {
    name: 'Luxury',
    image: '/img/Banner-img3.png',
    description: 'Bộ sưu tập đồng hồ sang trọng, chất liệu cao cấp, đẳng cấp thời thượng.',
    link: '/collections/luxury',
  },
];

const CollectionPage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">WATCH COLLECTIONS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Khám phá các bộ sưu tập đồng hồ nổi bật theo phong cách và nhu cầu của bạn.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((col, idx) => (
            <div key={col.name} className="group relative overflow-hidden rounded-lg shadow-lg opacity-0 animate-fade-in" style={{animationDelay: `${0.2 + idx * 0.2}s`}}>
              <img
                src={col.image}
                alt={col.name}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{col.name}</h3>
                  <p className="text-white mb-2">{col.description}</p>
                  <Link
                    to={col.link}
                    className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                  >
                    Xem bộ sưu tập
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionPage; 