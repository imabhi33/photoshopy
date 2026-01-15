import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Photography', path: '/photography' },
        { name: 'Packages', path: '/packages' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${isScrolled
                ? 'bg-premium-black py-4 border-b border-premium-gold/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-3xl md:text-4xl font-display font-medium tracking-tight text-premium-cream hover:text-premium-gold transition-colors duration-500"
                    >
                        Photoshopy
                    </Link>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center space-x-12">
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 relative group ${location.pathname === link.path
                                        ? 'text-premium-gold'
                                        : 'text-premium-cream/60 hover:text-premium-gold'
                                        }`}
                                >
                                    {link.name}
                                    <span className={`absolute -bottom-2 left-0 w-0 h-[1px] bg-premium-gold transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`} />
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link
                                to="/booking"
                                className="premium-btn !px-8 !py-3"
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col space-y-2 group z-[110]"
                        aria-label="Toggle menu"
                    >
                        <span className={`w-8 h-[1px] bg-premium-cream transition-all duration-500 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
                        <span className={`w-8 h-[1px] bg-premium-cream transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-8 h-[1px] bg-premium-cream transition-all duration-500 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
                    </button>
                </nav>

                {/* Mobile Menu Overlay */}
                <div className={`fixed inset-0 bg-premium-black z-[105] flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <ul className="text-center space-y-10">
                        {navLinks.map((link, index) => (
                            <li
                                key={link.path}
                                className={`transition-all duration-700 delay-${index * 100} ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                            >
                                <Link
                                    to={link.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-5xl font-display italic ${location.pathname === link.path
                                        ? 'text-premium-gold'
                                        : 'text-premium-cream hover:text-premium-gold'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        <li className={`pt-12 transition-all duration-700 delay-500 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                            <Link
                                to="/booking"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="premium-btn text-lg"
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
