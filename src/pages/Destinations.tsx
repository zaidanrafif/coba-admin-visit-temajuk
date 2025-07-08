import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { destinations } from '../data/destinations';
import { Search } from 'lucide-react';

const Destinations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [...new Set(destinations.map((dest) => dest.category))];

  const filteredDestinations = destinations.filter((destination) => {
    const matchesSearch = destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      destination.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || destination.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <Hero
        title="Destinasi Wisata Temajuk"
        subtitle="Jelajahi keindahan tersembunyi di ujung barat Indonesia"
        imageUrl="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Semua Destinasi"
            subtitle="Temukan berbagai destinasi wisata menarik di Temajuk"
          />

          {/* Search and Filter */}
          <div className="mb-10 mt-6 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Cari destinasi..."
                className="w-full px-4 py-2 pl-10 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="w-full md:w-auto">
              <select
                className="w-full md:w-auto px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
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
          </div>

          {/* Destinations Grid */}
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map((destination) => (
                <Card
                  key={destination.id}
                  id={destination.id}
                  title={destination.title}
                  description={destination.description}
                  imageUrl={destination.imageUrl}
                  link="/destinasi"
                  category={destination.category}
                  price={destination.price}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Tidak ada destinasi yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Destinations;