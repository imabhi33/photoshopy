import { useState, useEffect, useRef } from 'react';
import { submitBooking } from '../utils/api';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: 'wedding',
        eventDate: '',
        location: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        setIsLoaded(true);
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsSelectOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const eventTypes = [
        { value: 'wedding', label: 'Wedding Documentation' },
        { value: 'pre-wedding', label: 'Pre-Wedding Story' },
        { value: 'event', label: 'Special Event' },
        { value: 'portrait', label: 'Portrait Session' }
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSelectChange = (value) => {
        setFormData({ ...formData, eventType: value });
        setIsSelectOpen(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await submitBooking(formData);
            setStatus({ type: 'success', message: response.message });
            setFormData({
                name: '',
                email: '',
                phone: '',
                eventType: 'wedding',
                eventDate: '',
                location: '',
                message: ''
            });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Failed to submit booking. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-premium-black pt-28 md:pt-48 pb-16 md:pb-32 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[10%] -right-[10%]">BOOK</div>
            <div className="decorative-text bottom-[10%] -left-[5%]">NOW</div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-32 text-center">
                    <div className="flex flex-col items-center mb-6 md:mb-8 group cursor-default">
                        <div className="w-8 md:w-12 h-[1px] bg-premium-gold/30 mb-4 md:mb-6 transition-all duration-700 group-hover:w-16 md:group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[0.8em] md:tracking-[1.2em] text-[8px] md:text-[9px] font-bold transition-all duration-1000 group-hover:text-premium-gold group-hover:tracking-[1em] md:group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Reservations
                            </span>
                        </div>
                        <div className="w-8 md:w-12 h-[1px] bg-premium-gold/30 mt-4 md:mt-6 transition-all duration-700 group-hover:w-16 md:group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-light text-white leading-[1.1] md:leading-[0.85]">
                        Secure Your <span className="italic text-premium-gold">Date</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 md:gap-16">
                    {/* Booking Form */}
                    <div className="lg:col-span-8">
                        <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12 bg-white/[0.02] p-6 md:p-12 border border-white/5">
                            {status.message && (
                                <div className={`p-4 text-[10px] tracking-[0.3em] uppercase border transition-all duration-500 ${status.type === 'success' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-red-500 border-red-500/20 bg-red-500/5'}`}>
                                    {status.message}
                                </div>
                            )}
                            {/* Personal Details */}
                            <div className="space-y-6 md:space-y-8">
                                <h3 className="text-xl md:text-2xl font-display italic text-premium-gold border-b border-white/10 pb-4">01. Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    <div className="group">
                                        <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10"
                                            placeholder="Your Name"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10"
                                            placeholder="+91 0000000000"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Event Date</label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={formData.date}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10 [color-scheme:dark]"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="space-y-6 md:space-y-8">
                                <h3 className="text-xl md:text-2xl font-display italic text-premium-gold border-b border-white/10 pb-4">02. Event Details</h3>
                                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                                    <div className="group relative" ref={selectRef}>
                                        <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Event Type</label>
                                        <div className="relative">
                                            <button
                                                type="button"
                                                onClick={() => setIsSelectOpen(!isSelectOpen)}
                                                className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-left text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg flex justify-between items-center"
                                            >
                                                {eventTypes.find(t => t.value === formData.eventType)?.label || formData.eventType}
                                                <span className={`transform transition-transform duration-300 ${isSelectOpen ? 'rotate-180' : ''}`}>▼</span>
                                            </button>
                                            {isSelectOpen && (
                                                <div className="absolute top-full left-0 w-full bg-premium-black border border-white/10 z-50 mt-1 max-h-48 overflow-y-auto">
                                                    {eventTypes.map((type) => (
                                                        <div
                                                            key={type.value}
                                                            onClick={() => handleSelectChange(type.value)}
                                                            className="px-4 py-3 hover:bg-white/5 cursor-pointer text-premium-cream font-light text-sm md:text-base border-b border-white/5 last:border-none"
                                                        >
                                                            {type.label}
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="group">
                                        <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Venue / Location</label>
                                        <input
                                            type="text"
                                            name="venue"
                                            value={formData.venue}
                                            onChange={handleChange}
                                            className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10"
                                            placeholder="City, Country"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="group">
                                    <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Additional Details</label>
                                    <textarea
                                        name="details"
                                        value={formData.details}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10 resize-none"
                                        placeholder="Tell us more about your plans..."
                                    ></textarea>
                                </div>
                            </div>

                            <div className="pt-8 md:pt-12 flex justify-end">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="premium-btn w-full md:w-auto"
                                >
                                    {isSubmitting ? 'Sending Request...' : 'Request Booking'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Sidebar Info */}
                    <div className="lg:col-span-4 space-y-8 md:space-y-12">
                        <div className="bg-premium-gold/[0.02] p-6 md:p-10 border border-white/5">
                            <h3 className="text-xl md:text-2xl font-display italic text-premium-gold mb-6 md:mb-8">Booking Process</h3>
                            <ul className="space-y-6 md:space-y-8">
                                <li className="relative pl-8 md:pl-10">
                                    <span className="absolute top-0 left-0 text-premium-gold/40 font-display text-lg md:text-xl">01</span>
                                    <h4 className="text-premium-white text-base md:text-lg font-display mb-1 md:mb-2">Inquiry</h4>
                                    <p className="text-premium-cream/40 text-xs md:text-sm font-light">Fill out the form with your event details.</p>
                                </li>
                                <li className="relative pl-8 md:pl-10">
                                    <span className="absolute top-0 left-0 text-premium-gold/40 font-display text-lg md:text-xl">02</span>
                                    <h4 className="text-premium-white text-base md:text-lg font-display mb-1 md:mb-2">Consultation</h4>
                                    <p className="text-premium-cream/40 text-xs md:text-sm font-light">We'll schedule a call to discuss your vision.</p>
                                </li>
                                <li className="relative pl-8 md:pl-10">
                                    <span className="absolute top-0 left-0 text-premium-gold/40 font-display text-lg md:text-xl">03</span>
                                    <h4 className="text-premium-white text-base md:text-lg font-display mb-1 md:mb-2">Proposal</h4>
                                    <p className="text-premium-cream/40 text-xs md:text-sm font-light">Receive a custom package tailored to you.</p>
                                </li>
                                <li className="relative pl-8 md:pl-10">
                                    <span className="absolute top-0 left-0 text-premium-gold/40 font-display text-lg md:text-xl">04</span>
                                    <h4 className="text-premium-white text-base md:text-lg font-display mb-1 md:mb-2">Confirmation</h4>
                                    <p className="text-premium-cream/40 text-xs md:text-sm font-light">Sign the contract and secure your date.</p>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 md:p-10 border border-white/5 bg-premium-gray/10 text-center">
                            <p className="text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-4">Direct Contact</p>
                            <p className="text-xl md:text-2xl font-display text-white mb-2">+91 123 456 7890</p>
                            <p className="text-premium-cream/60 font-light text-sm md:text-base">Mon - Sat, 10am - 7pm IST</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
