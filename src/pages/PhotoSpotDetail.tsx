import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { photoSpots } from '../data/photoSpots';
import { MapPin, Clock, Camera, CornerDownRight, ArrowLeft } from 'lucide-react';
import Slider from 'react-slick';

const PhotoSpotDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [photoSpot, setPhotoSpot] = useState(photoSpots.find((p) => p.id === id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setPhotoSpot(photoSpots.find((p) => p.id === id));
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

  if (!photoSpot) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Spot foto tidak ditemukan</h2>
          <p className="text-gray-600 mb-6">
            Maaf, spot foto yang Anda cari tidak ditemukan.
          </p>
          <Link
            to="/foto"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md shadow transition-colors duration-300"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Kembali ke Daftar Spot Foto
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
        style={{ backgroundImage: `url(${photoSpot.imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="bg-accent text-primary font-medium px-3 py-1 rounded-full text-sm">
              {photoSpot.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 font-heading">
              {photoSpot.title}
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
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Tentang {photoSpot.title}</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                {photoSpot.fullDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                  <MapPin className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">{photoSpot.location}</span>
                </div>
                <div className="flex items-center bg-gray-100 px-4 py-2 rounded-md">
                  <Clock className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700">Waktu Terbaik: {photoSpot.bestTime}</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tips Fotografi</h3>
              <ul className="list-none mb-6">
                {photoSpot.tips.map((tip, index) => (
                  <li key={index} className="flex mb-2">
                    <CornerDownRight className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                    <span className="text-gray-600">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Galeri</h2>
              <Slider {...sliderSettings} className="gallery-slider mb-6">
                {photoSpot.gallery.map((image, index) => (
                  <div key={index} className="p-1">
                    <img
                      src={image}
                      alt={`${photoSpot.title} - Gambar ${index + 1}`}
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
  <a
    href="https://www.google.com/maps/place/Pantai+Temajuk"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full h-full"
  >
    <img
      src="/images/peta-temajuk.jpg" // atau pakai Static Map jika mau
      alt="Peta Lokasi Pantai Temajuk"
      className="w-full h-full object-cover"
    />
  </a>
</div>


              <h3 className="text-xl font-semibold text-gray-800 mb-4">Atraksi Terdekat</h3>
              <div className="border-t border-gray-200 pt-4 mb-6">
                <ul className="space-y-2">
                  {photoSpot.nearbyAttractions.map((attraction, index) => (
                    <li key={index} className="flex items-start">
                      <Camera className="h-5 w-5 text-primary mr-2 mt-1" />
                      <span className="text-gray-700">{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="mb-3">
                  <span className="font-medium text-gray-700">Kategori:</span>
                  <span className="ml-2 text-gray-600">{photoSpot.category}</span>
                </div>
                <div className="mb-3">
                  <span className="font-medium text-gray-700">Waktu Terbaik:</span>
                  <span className="ml-2 text-gray-600">{photoSpot.bestTime}</span>
                </div>
              </div>

              <div className="mt-6">
                <Link
                  to="/foto"
                  className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-medium px-6 py-3 rounded-md shadow w-full justify-center transition-colors duration-300"
                >
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Kembali ke Daftar Spot Foto
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoSpotDetail;