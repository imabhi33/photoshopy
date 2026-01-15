import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Photography = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const categories = [
        {
            title: "Wedding Stories",
            image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200",
            description: "Timeless documentation of your union.",
            link: "/booking"
        },
        {
            title: "Cinematic Films",
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1200",
            description: "Moving memories that feel like cinema.",
            link: "/booking"
        },
        {
            title: "Pre-Wedding",
            image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1200",
            description: "Intimate portraits in beautiful locales.",
            link: "/booking"
        },
        {
            title: "Editorial",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
            description: "Fashion-forward portraits and lifestyle.",
            link: "/booking"
        }
    ];

    return (
        <div className="min-h-screen bg-premium-black pt-48 pb-24 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[10%] -left-[5%]">GALLERY</div>
            <div className="decorative-text top-[60%] -right-[10%] rotate-90">ARTISTRY</div>

            <div className="max-w-7xl mx-auto px-8 lg:px-12 relative z-10">
                {/* Header */}
                <div className="mb-32 text-center">
                    <div className="flex flex-col items-center mb-8 group cursor-default">
                        <div className="w-12 h-[1px] bg-premium-gold/30 mb-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[1.2em] text-[9px] font-bold transition-all duration-1000 group-hover:text-premium-gold group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Photography
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-premium-gold/30 mt-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>
                    <h1 className="text-6xl md:text-8xl font-display font-light text-white leading-[0.85]">
                        The <span className="italic text-premium-gold">Art of Vision</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {categories.map((category, index) => (
                        <div key={index} className="group relative overflow-hidden aspect-[4/5] border border-white/5">
                            <img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-premium-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700" />

                            <div className="absolute bottom-12 left-12 right-12 space-y-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                <span className="text-premium-gold uppercase tracking-[0.4em] text-[10px] font-bold block opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">Category</span>
                                <h3 className="text-4xl font-display text-white">{category.title}</h3>
                                <p className="text-premium-cream/60 font-light text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">{category.description}</p>
                                <Link to={category.link} className="inline-block text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold border-b border-premium-gold/20 pb-2 hover:border-premium-gold transition-all duration-500 opacity-0 group-hover:opacity-100 delay-300">
                                    View Stories
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Photography;
