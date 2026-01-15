import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const packages = [
        {
            name: 'Promise',
            subtitle: 'Engagement Package',
            price: '₹40,000',
            desc: 'An intimate storytelling experience covering temple puja and couple portraits.',
            features: [
                '2 Professional Crew Members',
                '1 Cinematographer + 1 Candid Photographer',
                '300+ RAW Photos (2-3 days delivery)',
                '50 Edited Photos (1-2 weeks delivery)',
                'Engagement Short Film (up to 2 mins)',
                '1 Month Final Delivery'
            ]
        },
        {
            name: 'Vow',
            subtitle: 'Cinematic Engagement',
            price: '₹60,000',
            popular: true,
            desc: 'Designed for celebrations with loved ones, covering ring ceremonies and rituals.',
            features: [
                '3 Professional Crew Members',
                '1 Cinematographer + 1 Candid + 1 Assistant',
                '500+ RAW Photos (2-3 days delivery)',
                '100 Edited Photos (1-2 weeks delivery)',
                'Engagement Long Film (10-20 mins)',
                'Engagement Short Film + Teaser',
                '1 Month Final Delivery'
            ]
        },
        {
            name: 'Whispers',
            subtitle: 'Pre-Wedding Package',
            price: '₹50,000',
            desc: 'Subtle storytelling within beautiful locales like Bhubaneswar or Puri.',
            features: [
                '3 Professional Crew Members',
                '1 Cinematographer + 1 Candid + 1 Assistant',
                '300+ RAW Photos (2-3 days delivery)',
                '80 Edited Photos (3-4 weeks delivery)',
                'Pre-Wedding Film (up to 2 mins)',
                '1 Pre-Wedding Reel + 3 Posters',
                '1 Day Drone Coverage Included'
            ]
        },
        {
            name: 'Regal',
            subtitle: 'Three-Day Wedding',
            price: '₹2,50,000',
            desc: 'A comprehensive cinematic storytelling package for both families.',
            features: [
                'Full Wedding Crew (Multi-camera)',
                'Comprehensive Candid & Traditional',
                'Complete Event Coverage (3 Days)',
                'Cinematic Wedding Film + Teaser',
                'Premium Heirloom Albums',
                'Full Drone & Crane Coverage',
                'Priority Post-Production'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-premium-black pt-48 pb-24 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[10%] -right-[10%]">INVEST</div>
            <div className="decorative-text top-[60%] -left-[5%] rotate-90">VALUE</div>

            <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-32 text-center">
                    <div className="flex flex-col items-center mb-8 group cursor-default">
                        <div className="w-12 h-[1px] bg-premium-gold/30 mb-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[1.2em] text-[9px] font-bold transition-all duration-1000 group-hover:text-premium-gold group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Investment
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-premium-gold/30 mt-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-light text-white leading-[0.85]">
                        Collections & <span className="italic text-premium-gold">Packages</span>
                    </h1>
                    <p className="text-premium-cream/40 font-light max-w-2xl mx-auto mt-12 text-lg leading-relaxed">
                        We believe in quality over quantity. Each collection is designed to provide a comprehensive and artistic documentation of your story.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className={`relative p-10 border ${pkg.popular ? 'border-premium-gold bg-premium-gold/[0.03]' : 'border-white/10 bg-premium-gray/30'} flex flex-col group transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl`}
                        >
                            {pkg.popular && (
                                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-premium-gold text-premium-black text-[8px] uppercase tracking-[0.4em] font-bold px-6 py-2 whitespace-nowrap">Most Popular</span>
                            )}

                            <div className="mb-12">
                                <h3 className="text-3xl font-display italic text-premium-gold mb-2 group-hover:scale-105 transition-transform duration-700 origin-left">{pkg.name}</h3>
                                <p className="text-premium-cream/40 text-[8px] uppercase tracking-[0.3em] font-bold mb-6">{pkg.subtitle}</p>
                                <p className="text-2xl font-display text-white mb-6">{pkg.price}</p>
                                <p className="text-premium-cream/50 font-light text-sm leading-relaxed h-20 overflow-hidden">{pkg.desc}</p>
                            </div>

                            <div className="flex-grow mb-12">
                                <ul className="space-y-4">
                                    {pkg.features.map((feature, fIndex) => (
                                        <li key={fIndex} className="flex items-start gap-3 text-[11px] font-light text-premium-cream/60 group-hover:text-premium-cream transition-colors duration-500">
                                            <span className="text-premium-gold text-[10px] mt-0.5">/</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Link
                                to="/booking"
                                className={`w-full text-center py-4 uppercase tracking-[0.4em] text-[9px] font-bold transition-all duration-700 border ${pkg.popular ? 'bg-premium-gold text-premium-black border-premium-gold hover:bg-transparent hover:text-premium-gold' : 'border-white/20 text-premium-cream hover:border-premium-gold hover:text-premium-gold'}`}
                            >
                                Inquire Now
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Investment Structure */}
                <div className="mt-32 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <span className="text-premium-gold uppercase tracking-[0.4em] text-[10px] font-bold">The Process</span>
                            <h2 className="text-5xl font-display font-light text-white">Investment <span className="italic text-premium-gold">Structure</span></h2>
                        </div>
                        <div className="grid gap-8">
                            <div className="p-8 border border-white/5 bg-premium-gray/20 relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-premium-gold/20 group-hover:bg-premium-gold transition-all duration-700" />
                                <h4 className="text-xl font-display text-white mb-4">30% Booking Advance</h4>
                                <p className="text-premium-cream/40 font-light text-sm leading-relaxed">
                                    To confirm your date and begin our creative collaboration. This allows us to secure crew and resources for your special day.
                                </p>
                            </div>
                            <div className="p-8 border border-white/5 bg-premium-gray/20 relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full bg-premium-gold/20 group-hover:bg-premium-gold transition-all duration-700" />
                                <h4 className="text-xl font-display text-white mb-4">70% Final Balance</h4>
                                <p className="text-premium-cream/40 font-light text-sm leading-relaxed">
                                    Due before the first event day starts. This ensures a seamless focus on capturing your story without administrative distractions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-16 border border-white/5 bg-premium-gold/[0.02] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-premium-gold/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <h3 className="text-3xl font-display italic text-premium-gold mb-8">Bespoke Collections</h3>
                        <p className="text-premium-cream/60 font-light mb-12 text-lg leading-relaxed">
                            Every story is unique. If our standard collections don't perfectly align with your vision, we are happy to craft a custom package tailored specifically to your requirements.
                        </p>
                        <div className="space-y-6 mb-12">
                            <div className="flex items-center gap-4 text-premium-cream/40 text-sm">
                                <span className="w-8 h-[1px] bg-premium-gold/30" />
                                <span>Custom Crew Sizing</span>
                            </div>
                            <div className="flex items-center gap-4 text-premium-cream/40 text-sm">
                                <span className="w-8 h-[1px] bg-premium-gold/30" />
                                <span>Destination Wedding Coverage</span>
                            </div>
                            <div className="flex items-center gap-4 text-premium-cream/40 text-sm">
                                <span className="w-8 h-[1px] bg-premium-gold/30" />
                                <span>Extended Event Duration</span>
                            </div>
                        </div>
                        <Link to="/contact" className="premium-btn w-full text-center">
                            Discuss Custom Options
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Packages;
