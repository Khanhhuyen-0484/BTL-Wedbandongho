import React from 'react';
import { Link } from 'react-router-dom';

const CollectionShowcase = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">WATCH COLLECTIONS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Curated with watches from 45+ international brands for you to choose from
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Classic Collection */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/divers-resized 1.png"
              alt="Classic Collection"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Classic</h3>
                <Link
                  to="/collections/classic"
                  className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  View Collection
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Smart Collection */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/Banner-img4.png"
              alt="Smart Collection"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Smart</h3>
                <Link
                  to="/collections/sport"
                  className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  View Collection
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Luxury Collection */}
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/img/Banner-img3.png"
              alt="Luxury Collection"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Luxury</h3>
                <Link
                  to="/collections/luxury"
                  className="inline-flex items-center text-white hover:text-gray-200 transition-colors"
                >
                  View Collection
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionShowcase;