import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';
import PinModal from './PinModal';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [clickCount, setClickCount] = useState(0);
    const [showPinModal, setShowPinModal] = useState(false);
    const { isAdmin } = useAdmin();
    const navigate = useNavigate();

    // Reset click count after 2 seconds of inactivity
    useEffect(() => {
        if (clickCount === 0) return;

        const timer = setTimeout(() => {
            setClickCount(0);
        }, 2000);

        return () => clearTimeout(timer);
    }, [clickCount]);

    const handleSecretClick = () => {
        if (isAdmin) {
            // If already admin, go straight to dashboard
            navigate('/admin-dashboard');
            return;
        }

        setClickCount(prev => {
            const newCount = prev + 1;
            if (newCount === 5) {
                setShowPinModal(true);
                return 0;
            }
            return newCount;
        });
    };

    return (
        <footer className="bg-premium-black border-t border-white/5 pt-16 md:pt-24 pb-8 md:pb-12">
            <PinModal isOpen={showPinModal} onClose={() => setShowPinModal(false)} />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-16 md:mb-24">
                    {/* Brand */}
                    <div className="md:col-span-12 lg:col-span-5 space-y-6 md:space-y-8">
                        <h3 className="text-3xl md:text-4xl font-display font-medium text-premium-cream">
                            Photoshopy
                        </h3>
                        <p className="text-premium-cream/40 font-light leading-relaxed max-w-sm text-sm md:text-base">
                            We are a home for your stories. Preserving the quiet magic of your most precious moments through cinematic photography and film.
                        </p>
                        <div className="flex space-x-6 md:space-x-8">
                            {['Instagram', 'Facebook', 'YouTube', 'Vimeo'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-premium-gold/50 hover:text-premium-gold transition-colors duration-500"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="md:col-span-6 lg:col-span-3 space-y-6 md:space-y-8">
                        <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-premium-gold">Navigation</h4>
                        <ul className="space-y-3 md:space-y-4">
                            {['Home', 'Photography', 'Packages', 'About', 'Contact', 'Booking'].map((link) => (
                                <li key={link}>
                                    <Link
                                        to={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`}
                                        className="text-premium-cream/60 hover:text-premium-gold transition-colors duration-500 font-light text-sm"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                            {isAdmin && (
                                <li>
                                    <Link
                                        to="/admin-dashboard"
                                        className="text-premium-gold hover:text-white transition-colors duration-500 font-bold text-sm uppercase tracking-widest"
                                    >
                                        Admin Dashboard
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="md:col-span-6 lg:col-span-4 space-y-6 md:space-y-8">
                        <h4 className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-premium-gold">Get in Touch</h4>
                        <div className="space-y-4 md:space-y-6">
                            <div className="space-y-1 md:space-y-2">
                                <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-premium-cream/30 font-bold">Email</span>
                                <p className="text-base md:text-lg font-display text-premium-cream break-all">hello@photoshopy.com</p>
                            </div>
                            <div className="space-y-1 md:space-y-2">
                                <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-premium-cream/30 font-bold">Phone</span>
                                <p className="text-base md:text-lg font-display text-premium-cream">+91 1234567890</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
                    <p
                        className="text-premium-cream/20 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold text-center md:text-left w-full md:w-auto select-none active:text-white/40 transition-colors"
                        onClick={handleSecretClick}
                    >
                        &copy; {currentYear} Photoshopy. All rights reserved.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 md:gap-12 w-full md:w-auto">
                        <Link to="#" className="text-premium-cream/20 hover:text-premium-gold transition-colors duration-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Privacy Policy</Link>
                        <Link to="#" className="text-premium-cream/20 hover:text-premium-gold transition-colors duration-500 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
