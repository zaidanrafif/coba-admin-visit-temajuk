import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { accommodations } from '../data/accommodations';
import { Search, SlidersHorizontal } from 'lucide-react';

const Accommodations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [...new Set(accommodations.map((acc) => acc.category))];

  const filteredAccommodations = accommodations.filter((accommodation) => {
    const matchesSearch = accommodation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      accommodation.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || accommodation.category === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== '') {
      const [min, max] = priceRange.split('-').map(Number);
      const price = parseInt(accommodation.price.split(' - ')[0].replace(/\D/g, ''));
      matchesPrice = price >= min && (max ? price <= max : true);
    }
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div>
      <Hero
        title="Akomodasi di Temajuk"
        subtitle="Temukan penginapan nyaman untuk liburan Anda"
        imageUrl="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Semua Akomodasi"
            subtitle="Pilihan tempat menginap di Temajuk untuk berbagai kebutuhan dan budget"
          />

          {/* Search and Filter */}
          <div className="mb-10 mt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
              <div className="relative w-full md:w-1/2">
                <input
                  type="text"
                  placeholder="Cari akomodasi..."
                  className="w-full px-4 py-2 pl-10 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>

              <button
                className="flex items-center text-primary hover:text-primary-dark transition-colors duration-200 md:ml-auto"
                onClick={() => setShowFilters(!showFilters)}
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                {showFilters ? 'Sembunyikan Filter' : 'Tampilkan Filter'}
              </button>
            </div>

            {showFilters && (
              <div className="flex flex-col md:flex-row gap-4 items-center bg-gray-50 p-4 rounded-md">
                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kategori
                  </label>
                  <select
                    className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="">Semua Kategori</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="w-full md:w-1/2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Kisaran Harga
                  </label>
                  <select
                    className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                    value={priceRange}
                    onChange={(e) => setPriceRange(e.target.value)}
                  >
                    <option value="">Semua Harga</option>
                    <option value="0-300000">Dibawah Rp 300.000</option>
                    <option value="300000-800000">Rp 300.000 - Rp 800.000</option>
                    <option value="800000-1500000">Rp 800.000 - Rp 1.500.000</option>
                    <option value="1500000-10000000">Diatas Rp 1.500.000</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Accommodations Grid */}
          {filteredAccommodations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccommodations.map((accommodation) => (
                <Card
                  key={accommodation.id}
                  id={accommodation.id}
                  title={accommodation.title}
                  description={accommodation.description}
                  imageUrl={accommodation.imageUrl}
                  link="/akomodasi"
                  category={accommodation.category}
                  price={accommodation.price}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Tidak ada akomodasi yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Accommodations;