import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import Gallery from './pages/Gallery';
import AdminGallery from './pages/AdminGallery';
import AdminDashboard from './pages/AdminDashboard';
import AdminBookings from './pages/AdminBookings';
import { AdminProvider } from './context/AdminContext';

function App() {
  return (
    <AdminProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-premium-black">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/photography" element={<Photography />} />
              <Route path="/gallery/:category" element={<Gallery />} />
              <Route path="/admin-dashboard" element={<AdminDashboard />} />
              <Route path="/admin/gallery" element={<AdminGallery />} />
              <Route path="/admin/bookings" element={<AdminBookings />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AdminProvider>
  );
}

export default App;
