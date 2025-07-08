import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { accommodations } from '../data/accommodations';
import { MapPin, Phone, Globe, Bed, ArrowLeft } from 'lucide-react';
import Slider from 'react-slick';

const AccommodationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [accommodation, setAccommodation] = useState(accommodations.find((a) => a.id === id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setAccommodation(accommodations.find((a) => a.id === id));
  }, [id]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if (!accommodation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Akomodasi tidak ditemukan</h2>
          <p className="text-gray-600 mb-6">
            Maaf, akomodasi yang Anda cari tidak ditemukan.
          </p>
          <Link
            to="/akomodasi"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md shadow transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Kembali ke Daftar Akomodasi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Image */}
      <div
        className="w-full h-[50vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${accommodation.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="bg-accent text-primary font-medium px-3 py-1 rounded-full text-sm">
              {accommodation.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 font-heading">
              {accommodation.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <div className="md:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang {accommodation.title}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {accommodation.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">{accommodation.location}</span>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                  <Phone className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">{accommodation.contact}</span>
                </div>
                {accommodation.website && (
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                    <Globe className="h-5 w-5 text-primary mr-2" />
                    <a href={`https://${accommodation.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      {accommodation.website}
                    </a>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fasilitas</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {accommodation.facilities.map((facility, index) => (
                  <span
                    key={index}
                    className="bg-primary bg-opacity-10 text-primary px-3 py-1 rounded-full text-sm"
                  >
                    {facility}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tipe Kamar</h3>
              <div className="space-y-4 mb-6">
                {accommodation.rooms.map((room, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <Bed className="h-5 w-5 text-primary mr-2" />
                      <h4 className="font-semibold text-gray-800">{room.type}</h4>
                    </div>
                    <p className="text-gray-600 mb-3">{room.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">Kapasitas: {room.capacity}</span>
                      <span className="font-medium text-primary">{room.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Galeri</h2>
              <Slider {...sliderSettings} className="gallery-slider mb-6">
                {accommodation.gallery.map((image, index) => (
                  <div key={index} className="p-1">
                    <img
                      src={image}
                      alt={`${accommodation.title} - Gambar ${index + 1}`}
                      className="w-full h-64 md:h-96 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Lokasi</h3>
              <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                {/* Placeholder for map (in a real app, this would be an actual map) */}
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <MapPin className="h-8 w-8 text-primary" />
                  <span className="ml-2 text-gray-700">Peta Lokasi</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-4">Informasi Lainnya</h3>
              <div className="border-t border-gray-200 pt-4">
                <div className="mb-3">
                  <span className="font-medium text-gray-700">Kategori:</span>
                  <span className="ml-2 text-gray-600">{accommodation.category}</span>
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-700">Kisaran Harga:</span>
                  <span className="ml-2 text-gray-600">{accommodation.price}</span>
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-700">Kontak:</span>
                  <span className="ml-2 text-gray-600">{accommodation.contact}</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/akomodasi"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md shadow w-full justify-center transition-colors duration-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Kembali ke Daftar Akomodasi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccommodationDetail;