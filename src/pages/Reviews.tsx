import React, { useState } from 'react';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Testimonial from '../components/Testimonial';
import { reviews } from '../data/reviews';
import { destinations } from '../data/destinations';
import { Search, Send, Star } from 'lucide-react';

const Reviews: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const destinationOptions = [...new Set(reviews.map((review) => review.destination))];

  const filteredReviews = reviews.filter((review) => {
    const matchesSearch = review.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDestination = selectedDestination === '' || review.destination === selectedDestination;
    
    const matchesRating = selectedRating === null || review.rating === selectedRating;
    
    return matchesSearch && matchesDestination && matchesRating;
  });

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDestination('');
    setSelectedRating(null);
  };

  return (
    <div>
      <Hero
        title="Ulasan Pengunjung"
        subtitle="Apa yang mereka katakan tentang pengalaman mereka di Temajuk"
        imageUrl="https://images.pexels.com/photos/6203792/pexels-photo-6203792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Semua Ulasan"
            subtitle="Baca pengalaman pengunjung sebelumnya untuk merencanakan liburan Anda di Temajuk"
          />

          {/* Search and Filter */}
          <div className="mb-10 mt-6">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Cari ulasan..."
                className="w-full px-4 py-2 pl-10 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-1/3">
                <select
                  className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                >
                  <option value="">Semua Destinasi</option>
                  {destinationOptions.map((dest) => (
                    <option key={dest} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full md:w-1/3 flex items-center">
                <span className="mr-4 text-gray-700">Rating:</span>
                <div className="flex space-x-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <button
                      key={rating}
                      className={`w-8 h-8 flex items-center justify-center rounded-full ${
                        selectedRating === rating ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'
                      }`}
                      onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                    >
                      {rating}
                    </button>
                  ))}
                </div>
              </div>

              <button
                className="w-full md:w-auto px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-200 mt-2 md:mt-0"
                onClick={clearFilters}
              >
                Reset Filter
              </button>
            </div>
          </div>

          {/* Reviews Grid */}
          {filteredReviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredReviews.map((review) => (
                <Testimonial
                  key={review.id}
                  name={review.name}
                  date={review.date}
                  rating={review.rating}
                  text={review.text}
                  imageUrl={review.imageUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-lg">Tidak ada ulasan yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Submit Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Bagikan Pengalaman Anda"
            subtitle="Ceritakan pengalaman Anda saat mengunjungi Temajuk"
            center={true}
          />

          <div className="max-w-2xl mx-auto mt-8">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Nama Anda"
                  className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="destination" className="block text-sm font-medium text-gray-700 mb-1">
                  Destinasi
                </label>
                <select
                  id="destination"
                  className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                >
                  <option value="">Pilih Destinasi</option>
                  {destinations.map((dest) => (
                    <option key={dest.id} value={dest.title}>
                      {dest.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      type="button"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500"
                    >
                      <Star className={`h-6 w-6 ${rating <= 3 ? 'text-gray-400' : 'text-accent-dark fill-current'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="review" className="block text-sm font-medium text-gray-700 mb-1">
                  Ulasan
                </label>
                <textarea
                  id="review"
                  rows={5}
                  placeholder="Ceritakan pengalaman Anda..."
                  className="w-full px-4 py-2 rounded-md border-2 border-gray-200 focus:border-primary focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md shadow transition-colors duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Kirim Ulasan
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;