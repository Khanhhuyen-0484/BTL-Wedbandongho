import React from 'react';

const BrandFilter = ({ brands, selectedBrands, onBrandChange }) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold text-center mb-8">SHOP BY BRAND</h2>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-4">
          {brands.map((brand, idx) => (
            <button
              key={brand.id}
              className={`p-2 flex justify-center items-center border ${
                selectedBrands.includes(brand.id) 
                  ? 'border-green-500 bg-green-50' 
                  : 'border-gray-200 hover:border-gray-400'
              } transition-colors duration-300 transition-transform active:scale-95 opacity-0 animate-fade-in`}
              style={{animationDelay: `${0.1 + idx * 0.05}s`}}
              onClick={() => onBrandChange(brand.id)}
            >
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="h-6 max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300" 
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandFilter;