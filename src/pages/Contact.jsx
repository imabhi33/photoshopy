import { useState, useEffect } from 'react';
import { submitContact } from '../utils/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: '', message: '' });

        try {
            const response = await submitContact(formData);
            setStatus({ type: 'success', message: response.message });
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch (error) {
            setStatus({
                type: 'error',
                message: error.message || 'Failed to submit. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-premium-black pt-48 pb-24 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[5%] -left-[5%]">CONNECT</div>
            <div className="decorative-text top-[50%] -right-[10%] rotate-90">HELLO</div>

            <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-32 text-center">
                    <div className="text-reveal-container mb-6">
                        <span className={`block text-premium-gold uppercase tracking-[0.8em] text-[10px] font-bold transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                            Contact
                        </span>
                    </div>
                    <h1 className="section-title-premium text-white">
                        Start a <span className="italic text-premium-gold">Conversation</span>
                    </h1>
                    <div className="gold-line mt-12 opacity-20" />
                </div>

                <div className="grid lg:grid-cols-12 gap-32">
                    {/* Info Side */}
                    <div className="lg:col-span-5 space-y-24">
                        <div className="space-y-10">
                            <h2 className="text-5xl font-display italic text-premium-gold">Get in Touch</h2>
                            <p className="text-premium-cream/60 font-light leading-relaxed text-xl">
                                Whether you have a question about our services, want to discuss a project, or just want to say hello, we'd love to hear from you.
                            </p>
                        </div>

                        <div className="space-y-16 relative">
                            <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-premium-gold/40 via-premium-gold/10 to-transparent" />

                            <div className="flex items-start gap-10 group">
                                <span className="text-premium-gold/10 text-6xl font-display group-hover:text-premium-gold/30 transition-all duration-700 group-hover:-translate-y-2">01</span>
                                <div className="space-y-3">
                                    <span className="text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold">Email</span>
                                    <p className="text-2xl font-display text-premium-cream group-hover:text-premium-gold transition-colors duration-500">hello@photoshopy.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-10 group">
                                <span className="text-premium-gold/10 text-6xl font-display group-hover:text-premium-gold/30 transition-all duration-700 group-hover:-translate-y-2">02</span>
                                <div className="space-y-3">
                                    <span className="text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold">Phone</span>
                                    <p className="text-2xl font-display text-premium-cream group-hover:text-premium-gold transition-colors duration-500">+91 1234567890</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-10 group">
                                <span className="text-premium-gold/10 text-6xl font-display group-hover:text-premium-gold/30 transition-all duration-700 group-hover:-translate-y-2">03</span>
                                <div className="space-y-3">
                                    <span className="text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold">Studio</span>
                                    <p className="text-2xl font-display text-premium-cream group-hover:text-premium-gold transition-colors duration-500">Bhubaneswar, Odisha, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="lg:col-span-7 relative">
                        <div className="absolute -top-12 -right-12 w-32 h-32 border-t border-r border-premium-gold/20 -z-10" />
                        <div className="absolute -bottom-12 -left-12 w-32 h-32 border-b border-l border-premium-gold/20 -z-10" />

                        <form onSubmit={handleSubmit} className="space-y-12 p-16 border border-white/10 bg-premium-gray/30 backdrop-blur-sm shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-premium-gold/[0.01] -z-10 group-hover:bg-premium-gold/[0.02] transition-all duration-700" />

                            {status.message && (
                                <div className={`p-6 text-sm tracking-[0.3em] uppercase border ${status.type === 'success' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-red-500 border-red-500/20 bg-red-500/5'}`}>
                                    {status.message}
                                </div>
                            )}

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] text-premium-gold/50 font-bold">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg placeholder:text-white/5"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-premium-gold/50 font-bold">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg placeholder:text-white/5"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] uppercase tracking-[0.3em] text-premium-gold/50 font-bold">Phone</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg placeholder:text-white/5"
                                        placeholder="Phone Number"
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <label className="text-[10px] uppercase tracking-[0.3em] text-premium-gold/50 font-bold">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="w-full bg-transparent border-b border-white/10 py-4 focus:border-premium-gold outline-none transition-all duration-700 text-premium-cream font-light text-lg resize-none placeholder:text-white/5"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <div className="pt-12">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="premium-btn w-full text-sm py-6"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
