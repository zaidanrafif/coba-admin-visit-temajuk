import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { destinations } from '../../../data/destinations';
import { Save, ArrowLeft, Plus, X } from 'lucide-react';

const DestinationForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    fullDescription: '',
    imageUrl: '',
    category: '',
    price: '',
    location: '',
    openHours: '',
    facilities: [''],
    activities: [''],
    tips: [''],
    gallery: ['']
  });

  useEffect(() => {
    if (isEdit && id) {
      const destination = destinations.find(d => d.id === id);
      if (destination) {
        setFormData({
          title: destination.title,
          description: destination.description,
          fullDescription: destination.fullDescription,
          imageUrl: destination.imageUrl,
          category: destination.category,
          price: destination.price,
          location: destination.location,
          openHours: destination.openHours,
          facilities: destination.facilities,
          activities: destination.activities,
          tips: destination.tips,
          gallery: destination.gallery
        });
      }
    }
  }, [isEdit, id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleArrayChange = (field: 'facilities' | 'activities' | 'tips' | 'gallery', index: number, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field: 'facilities' | 'activities' | 'tips' | 'gallery') => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field: 'facilities' | 'activities' | 'tips' | 'gallery', index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would make an API call
    console.log('Save destination:', formData);
    navigate('/admin/destinations');
  };

  const categories = ['Pantai', 'Monumen', 'Alam', 'Teluk', 'Air Terjun'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={() => navigate('/admin/destinations')}
            className="mr-4 p-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-2xl font-bold text-gray-800">
            {isEdit ? 'Edit Destinasi' : 'Tambah Destinasi'}
          </h1>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Informasi Dasar</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nama Destinasi *
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              >
                <option value="">Pilih Kategori</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Harga Tiket *
              </label>
              <input
                type="text"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                placeholder="Rp 10.000"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Jam Buka *
              </label>
              <input
                type="text"
                name="openHours"
                value={formData.openHours}
                onChange={handleInputChange}
                placeholder="08.00 - 17.00 WIB"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Alamat *
            </label>
            <textarea
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              URL Gambar Utama *
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Singkat *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi Lengkap *
            </label>
            <textarea
              name="fullDescription"
              value={formData.fullDescription}
              onChange={handleInputChange}
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Facilities */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Fasilitas</h2>
            <button
              type="button"
              onClick={() => addArrayItem('facilities')}
              className="text-primary hover:text-primary-dark flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              Tambah
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.facilities.map((facility, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={facility}
                  onChange={(e) => handleArrayChange('facilities', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nama fasilitas"
                />
                {formData.facilities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('facilities', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Aktivitas</h2>
            <button
              type="button"
              onClick={() => addArrayItem('activities')}
              className="text-primary hover:text-primary-dark flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              Tambah
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.activities.map((activity, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={activity}
                  onChange={(e) => handleArrayChange('activities', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Nama aktivitas"
                />
                {formData.activities.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('activities', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Tips Kunjungan</h2>
            <button
              type="button"
              onClick={() => addArrayItem('tips')}
              className="text-primary hover:text-primary-dark flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              Tambah
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.tips.map((tip, index) => (
              <div key={index} className="flex items-start space-x-2">
                <textarea
                  value={tip}
                  onChange={(e) => handleArrayChange('tips', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tips untuk pengunjung"
                  rows={2}
                />
                {formData.tips.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('tips', index)}
                    className="text-red-600 hover:text-red-800 mt-2"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Galeri</h2>
            <button
              type="button"
              onClick={() => addArrayItem('gallery')}
              className="text-primary hover:text-primary-dark flex items-center"
            >
              <Plus className="h-4 w-4 mr-1" />
              Tambah
            </button>
          </div>
          
          <div className="space-y-3">
            {formData.gallery.map((image, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="url"
                  value={image}
                  onChange={(e) => handleArrayChange('gallery', index, e.target.value)}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="URL gambar"
                />
                {formData.gallery.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('gallery', index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={() => navigate('/admin/destinations')}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-primary hover:bg-primary-dark text-white rounded-md flex items-center transition-colors duration-200"
          >
            <Save className="h-4 w-4 mr-2" />
            {isEdit ? 'Update' : 'Simpan'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DestinationForm;