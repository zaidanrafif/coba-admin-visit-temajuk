import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-accent" />
              <span className="ml-2 text-xl font-bold text-white font-heading">
                Visit Temajuk
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Jelajahi keindahan alam Temajuk, destinasi wisata eksotis di ujung barat Indonesia.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors duration-200">Beranda</Link>
              </li>
              <li>
                <Link to="/destinasi" className="text-gray-300 hover:text-accent transition-colors duration-200">Destinasi</Link>
              </li>
              <li>
                <Link to="/akomodasi" className="text-gray-300 hover:text-accent transition-colors duration-200">Akomodasi</Link>
              </li>
              <li>
                <Link to="/transportasi" className="text-gray-300 hover:text-accent transition-colors duration-200">Transportasi</Link>
              </li>
              <li>
                <Link to="/kuliner" className="text-gray-300 hover:text-accent transition-colors duration-200">Kuliner</Link>
              </li>
              <li>
                <Link to="/foto" className="text-gray-300 hover:text-accent transition-colors duration-200">Spot Foto</Link>
              </li>
              <li>
                <Link to="/ulasan" className="text-gray-300 hover:text-accent transition-colors duration-200">Ulasan</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-accent mr-2 mt-1" />
                <p className="text-gray-300">Temajuk, Kecamatan Paloh, Kabupaten Sambas, Kalimantan Barat, Indonesia</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-accent mr-2" />
                <p className="text-gray-300">+62 8123 4567 890</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-accent mr-2" />
                <p className="text-gray-300">info@visittemajuk.id</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Visit Temajuk. Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;