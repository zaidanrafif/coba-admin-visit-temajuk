import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/admin/ProtectedRoute';
import AdminLayout from './components/admin/AdminLayout';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Accommodations from './pages/Accommodations';
import AccommodationDetail from './pages/AccommodationDetail';
import Transportation from './pages/Transportation';
import Culinary from './pages/Culinary';
import CulinaryDetail from './pages/CulinaryDetail';
import PhotoSpots from './pages/PhotoSpots';
import PhotoSpotDetail from './pages/PhotoSpotDetail';
import Reviews from './pages/Reviews';
import AdminLogin from './pages/admin/AdminLogin';
import DestinationList from './pages/admin/destinations/DestinationList';
import DestinationForm from './pages/admin/destinations/DestinationForm';
import AccommodationList from './pages/admin/accommodations/AccommodationList';
import AccommodationForm from './pages/admin/accommodations/AccommodationForm';
import CulinaryList from './pages/admin/culinary/CulinaryList';
import CulinaryForm from './pages/admin/culinary/CulinaryForm';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes with Navbar and Footer */}
          <Route path="/*" element={
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/destinasi" element={<Destinations />} />
                  <Route path="/destinasi/:id" element={<DestinationDetail />} />
                  <Route path="/akomodasi" element={<Accommodations />} />
                  <Route path="/akomodasi/:id" element={<AccommodationDetail />} />
                  <Route path="/transportasi" element={<Transportation />} />
                  <Route path="/kuliner" element={<Culinary />} />
                  <Route path="/kuliner/:id" element={<CulinaryDetail />} />
                  <Route path="/foto" element={<PhotoSpots />} />
                  <Route path="/foto/:id" element={<PhotoSpotDetail />} />
                  <Route path="/ulasan" element={<Reviews />} />
                </Routes>
              </main>
              <Footer />
            </div>
          } />
          
          {/* Admin Routes without Navbar and Footer */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/*" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route index element={<DestinationList />} />
            <Route path="destinations" element={<DestinationList />} />
            <Route path="destinations/add" element={<DestinationForm />} />
            <Route path="destinations/edit/:id" element={<DestinationForm />} />
            <Route path="accommodations" element={<AccommodationList />} />
            <Route path="accommodations/add" element={<AccommodationForm />} />
            <Route path="accommodations/edit/:id" element={<AccommodationForm />} />
            <Route path="culinary" element={<CulinaryList />} />
            <Route path="culinary/add" element={<CulinaryForm />} />
            <Route path="culinary/edit/:id" element={<CulinaryForm />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;