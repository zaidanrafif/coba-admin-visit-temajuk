import React from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { 
  MapPin, 
  Home, 
  Bed, 
  Utensils, 
  LogOut, 
  Settings,
  Plus,
  Edit
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const menuItems = [
    {
      title: 'Destinasi',
      icon: MapPin,
      submenu: [
        { title: 'Tambah Destinasi', path: '/admin/destinations/add', icon: Plus },
        { title: 'Edit Destinasi', path: '/admin/destinations', icon: Edit }
      ]
    },
    {
      title: 'Akomodasi',
      icon: Bed,
      submenu: [
        { title: 'Tambah Akomodasi', path: '/admin/accommodations/add', icon: Plus },
        { title: 'Edit Akomodasi', path: '/admin/accommodations', icon: Edit }
      ]
    },
    {
      title: 'Kuliner',
      icon: Utensils,
      submenu: [
        { title: 'Tambah Kuliner', path: '/admin/culinary/add', icon: Plus },
        { title: 'Edit Kuliner', path: '/admin/culinary', icon: Edit }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center">
            <MapPin className="h-8 w-8 text-primary" />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">Admin Panel</h1>
              <p className="text-sm text-gray-600">Visit Temajuk</p>
            </div>
          </div>
        </div>

        <nav className="mt-6">
          {menuItems.map((item, index) => (
            <div key={index}>
              {item.submenu ? (
                <div className="px-6 py-3">
                  <div className="flex items-center text-gray-700 font-medium mb-2">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.title}
                  </div>
                  <div className="ml-8 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.path}
                        className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                          isActive(subItem.path)
                            ? 'bg-primary text-white'
                            : 'text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        <subItem.icon className="h-4 w-4 mr-2" />
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 ${
                    (item.exact ? location.pathname === item.path : isActive(item.path))
                      ? 'bg-primary text-white hover:bg-primary-dark'
                      : ''
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 w-64 p-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-800">{user?.username}</p>
              <p className="text-xs text-gray-600">Administrator</p>
            </div>
            <button
              onClick={logout}
              className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
              title="Logout"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-6 py-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              {location.pathname.includes('/destinations') && 'Manajemen Destinasi'}
              {location.pathname.includes('/accommodations') && 'Manajemen Akomodasi'}
              {location.pathname.includes('/culinary') && 'Manajemen Kuliner'}
              {location.pathname === '/admin' && ''}
            </h2>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;