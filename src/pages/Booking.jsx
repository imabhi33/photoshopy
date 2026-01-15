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
        <div className="min-h-screen bg-premium-black pt-48 pb-24 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[5%] -right-[5%]">RESERVE</div>
            <div className="decorative-text top-[50%] -left-[10%] rotate-90">MOMENTS</div>

            <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-32 text-center">
                    <div className="flex flex-col items-center mb-8 group cursor-default">
                        <div className="w-12 h-[1px] bg-premium-gold/30 mb-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[1.2em] text-[9px] font-bold transition-all duration-1000 group-hover:text-premium-gold group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Reservations
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-premium-gold/30 mt-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-light text-white leading-[0.85]">
                        Book Your <span className="italic text-premium-gold">Story</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-12 gap-32 items-start">
                    {/* Info Side */}
                    <div className="lg:col-span-4 space-y-24">
                        <div className="space-y-10">
                            <h2 className="text-5xl font-display italic text-premium-gold">Let's Connect</h2>
                            <p className="text-premium-cream/60 font-light leading-relaxed text-lg">
                                Your story is unique, and it deserves to be told with care. Fill out the form, and let's start planning how to preserve your most precious moments.
                            </p>
                        </div>

                        <div className="grid gap-8 relative">
                            <div className="absolute -left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-premium-gold/40 via-premium-gold/10 to-transparent" />

                            <div className="p-8 border border-white/5 bg-premium-gray/10 backdrop-blur-sm space-y-3 group hover:border-premium-gold/20 transition-all duration-700">
                                <span className="text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold block opacity-50">Email</span>
                                <p className="text-xl font-display text-premium-cream group-hover:text-premium-gold transition-colors duration-500">hello@photoshopy.com</p>
                            </div>

                            <div className="p-8 border border-white/5 bg-premium-gray/10 backdrop-blur-sm space-y-3 group hover:border-premium-gold/20 transition-all duration-700">
                                <span className="text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold block opacity-50">Phone</span>
                                <p className="text-xl font-display text-premium-cream group-hover:text-premium-gold transition-colors duration-500">+91 1234567890</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-8 relative">
                        <div className="absolute -top-12 -left-12 w-32 h-32 border-t border-l border-premium-gold/10 -z-10" />
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 border-b border-r border-premium-gold/10 -z-10" />

                        <form onSubmit={handleSubmit} className="space-y-16 p-12 md:p-20 border border-white/5 bg-premium-gray/20 backdrop-blur-md shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/[0.02] to-transparent -z-10" />

                            {status.message && (
                                <div className={`p-6 text-[10px] tracking-[0.3em] uppercase border transition-all duration-500 ${status.type === 'success' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-red-500 border-red-500/20 bg-red-500/5'}`}>
                                    {status.message}
                                </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                                {/* Name */}
                                <div className="relative group/input">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg placeholder:text-transparent"
                                        placeholder="Name"
                                    />
                                    <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-premium-gold/40 font-bold transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-premium-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-premium-gold">
                                        Full Name
                                    </label>
                                </div>

                                {/* Email */}
                                <div className="relative group/input">
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg placeholder:text-transparent"
                                        placeholder="Email"
                                    />
                                    <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-premium-gold/40 font-bold transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-premium-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-premium-gold">
                                        Email Address
                                    </label>
                                </div>

                                {/* Phone */}
                                <div className="relative group/input">
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="peer w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg placeholder:text-transparent"
                                        placeholder="Phone"
                                    />
                                    <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-premium-gold/40 font-bold transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-premium-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-premium-gold">
                                        Phone Number
                                    </label>
                                </div>

                                {/* Custom Select */}
                                <div className="relative" ref={selectRef}>
                                    <label className="absolute -top-4 left-0 text-[10px] uppercase tracking-[0.3em] text-premium-gold/40 font-bold">
                                        Event Type
                                    </label>
                                    <div
                                        onClick={() => setIsSelectOpen(!isSelectOpen)}
                                        className={`w-full border-b border-white/10 py-4 cursor-pointer flex justify-between items-center transition-all duration-700 ${isSelectOpen ? 'border-premium-gold' : ''}`}
                                    >
                                        <span className="text-premium-cream font-light text-lg">
                                            {eventTypes.find(t => t.value === formData.eventType)?.label}
                                        </span>
                                        <svg
                                            className={`w-4 h-4 text-premium-gold/40 transition-transform duration-500 ${isSelectOpen ? 'rotate-180' : ''}`}
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    </div>

                                    {/* Dropdown Options */}
                                    <div className={`absolute top-full left-0 right-0 mt-2 bg-premium-gray border border-white/10 z-50 transition-all duration-500 origin-top ${isSelectOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                                        {eventTypes.map((type) => (
                                            <div
                                                key={type.value}
                                                onClick={() => handleSelectChange(type.value)}
                                                className={`px-6 py-4 text-sm uppercase tracking-[0.2em] cursor-pointer transition-all duration-300 hover:bg-premium-gold hover:text-premium-black ${formData.eventType === type.value ? 'text-premium-gold' : 'text-premium-cream/60'}`}
                                            >
                                                {type.label}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Message */}
                            <div className="relative group/input">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    className="peer w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg resize-none placeholder:text-transparent"
                                    placeholder="Message"
                                />
                                <label className="absolute left-0 top-4 text-[10px] uppercase tracking-[0.3em] text-premium-gold/40 font-bold transition-all duration-500 pointer-events-none peer-focus:-top-4 peer-focus:text-premium-gold peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-premium-gold">
                                    Tell us about your vision...
                                </label>
                            </div>

                            <div className="pt-8">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="premium-btn w-full text-[10px] py-6"
                                >
                                    {isSubmitting ? 'Sending Request...' : 'Request Booking'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
