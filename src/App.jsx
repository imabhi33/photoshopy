import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Photography from './pages/Photography';
import Packages from './pages/Packages';
import About from './pages/About';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-premium-black">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
