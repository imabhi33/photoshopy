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
        <div className="min-h-screen bg-premium-black pt-28 md:pt-48 pb-16 md:pb-24 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[10%] -left-[5%]">CONNECT</div>
            <div className="decorative-text top-[60%] -right-[10%] rotate-90">SAY HELLO</div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-32 text-center">
                    <div className="flex flex-col items-center mb-6 md:mb-8 group cursor-default">
                        <div className="w-8 md:w-12 h-[1px] bg-premium-gold/30 mb-4 md:mb-6 transition-all duration-700 group-hover:w-16 md:group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[0.8em] md:tracking-[1.2em] text-[8px] md:text-[9px] font-bold transition-all duration-1000 group-hover:text-premium-gold group-hover:tracking-[1em] md:group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Get in Touch
                            </span>
                        </div>
                        <div className="w-8 md:w-12 h-[1px] bg-premium-gold/30 mt-4 md:mt-6 transition-all duration-700 group-hover:w-16 md:group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-light text-white leading-[1.1] md:leading-[0.85]">
                        Start Your <span className="italic text-premium-gold">Story</span>
                    </h1>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 md:gap-24">
                    {/* Contact Info */}
                    <div className="space-y-12 md:space-y-16">
                        <div className="space-y-6 md:space-y-8">
                            <h2 className="text-3xl md:text-4xl font-display italic text-premium-white">Let's Create Together</h2>
                            <p className="text-premium-cream/60 font-light leading-relaxed text-base md:text-lg">
                                We'd look forward to hearing from you. Whether you have a specific vision in mind or need guidance, we're here to help you create something timeless.
                            </p>
                        </div>

                        <div className="space-y-8 md:space-y-10">
                            <div className="space-y-2 md:space-y-3 group">
                                <span className="text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold block mb-1 md:mb-2">Email Us</span>
                                <a href="mailto:hello@photoshopy.com" className="text-2xl md:text-3xl font-display text-white group-hover:text-premium-gold transition-colors duration-500 break-all">hello@photoshopy.com</a>
                            </div>
                            <div className="space-y-2 md:space-y-3 group">
                                <span className="text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold block mb-1 md:mb-2">Call Us</span>
                                <a href="tel:+911234567890" className="text-2xl md:text-3xl font-display text-white group-hover:text-premium-gold transition-colors duration-500">+91 123 456 7890</a>
                            </div>
                            <div className="space-y-2 md:space-y-3">
                                <span className="text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold block mb-1 md:mb-2">Visit Us</span>
                                <p className="text-xl md:text-2xl font-display text-white leading-relaxed">
                                    123 Creative Studio,<br />
                                    Design District, New Delhi - 110001
                                </p>
                            </div>
                        </div>

                        <div className="pt-4 md:pt-8">
                            <h3 className="text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold mb-4 md:mb-6">Follow Our Journey</h3>
                            <div className="flex gap-6 md:gap-8">
                                {['Instagram', 'Facebook', 'Vimeo'].map((social, index) => (
                                    <a key={index} href="#" className="text-premium-cream/40 hover:text-premium-gold transition-colors duration-500 text-xs md:text-sm">{social}</a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 bg-white/[0.02] p-6 md:p-12 border border-white/5">
                        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                            <div className="group">
                                <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Your Name</label>
                                <input
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
                        </div>

                        <div className="group">
                            <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10"
                                placeholder="Wedding Inquiry / Collaboration"
                                required
                            />
                        </div>

                        <div className="group">
                            <label className="block text-premium-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-2 md:mb-3 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="w-full bg-transparent border-b border-white/20 py-2 md:py-4 text-premium-cream focus:border-premium-gold outline-none transition-all duration-500 font-light text-base md:text-lg placeholder:text-white/10 resize-none"
                                placeholder="Tell us about your story..."
                                required
                            ></textarea>
                        </div>

                        <div className="pt-4 md:pt-8 text-center md:text-left">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="premium-btn w-full md:w-auto"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
