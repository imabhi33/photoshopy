import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-premium-black relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[10%] -left-[10%] opacity-[0.02]">CINEMA</div>
            <div className="decorative-text top-[40%] -right-[20%] rotate-90 opacity-[0.01]">SOUL</div>
            <div className="decorative-text bottom-[10%] -left-[15%] opacity-[0.02]">STORY</div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-32 pb-12">
                {/* Background Image with Parallax Effect */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000"
                        alt="Hero Background"
                        className="w-full h-full object-cover opacity-30 animate-parallax"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-premium-black via-premium-black/40 to-premium-black" />
                </div>

                {/* Main Content Container */}
                <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex-grow flex flex-col justify-center items-center">
                    <div className="flex flex-col items-center mb-12 group cursor-default">
                        <div className="w-12 h-[1px] bg-premium-gold/30 mb-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[1.2em] text-[9px] font-bold transition-all duration-1000 delay-300 group-hover:text-premium-gold group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Soul <span className="text-premium-gold mx-2">+</span> Cinema
                            </span>
                        </div>
                        <div className="w-12 h-[1px] bg-premium-gold/30 mt-6 transition-all duration-700 group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-light text-white mb-16 leading-[0.85]">
                        <div className="text-reveal-container">
                            <span className={`block transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Capturing the
                            </span>
                        </div>
                        <div className="text-reveal-container">
                            <span className={`block italic text-premium-gold transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Art of Storytelling
                            </span>
                        </div>
                    </h1>

                    <div className={`transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-lg md:text-xl text-premium-cream/60 mb-20 max-w-2xl mx-auto font-light leading-relaxed">
                            We don't just take photographs. We preserve emotions, whispers, and the quiet magic of your most precious moments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                            <Link to="/photography" className="premium-btn">
                                Explore Photography
                            </Link>
                            <Link to="/packages" className="text-premium-gold uppercase tracking-[0.4em] text-[10px] font-bold border border-premium-gold/20 px-12 py-5 hover:bg-premium-gold hover:text-premium-black transition-all duration-500">
                                View Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-48 md:py-64 px-8 lg:px-24 relative">
                <div className="gold-line absolute top-0 left-0" />
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-32 items-center">
                    <div className="relative group">
                        <div className="aspect-[4/5] overflow-hidden border border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000"
                                alt="Philosophy"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />
                        </div>
                        <div className="absolute -bottom-16 -right-16 w-2/3 aspect-square border border-premium-gold/10 -z-10 group-hover:border-premium-gold/30 transition-colors duration-700" />
                        <div className="absolute -top-16 -left-16 w-1/2 aspect-square bg-premium-gold/[0.02] -z-10" />
                        <div className="absolute top-1/2 -left-12 -translate-y-1/2 text-[10px] uppercase tracking-[1em] font-bold text-premium-gold/20 -rotate-90 whitespace-nowrap">PHILOSOPHY</div>
                    </div>

                    <div className="space-y-16">
                        <h2 className="text-6xl md:text-8xl font-display italic leading-[0.85]">
                            A Home for <br />
                            <span className="text-premium-gold">Your Stories</span>
                        </h2>
                        <div className="space-y-10 text-premium-cream/60 font-light leading-relaxed text-xl">
                            <p>
                                Stories are everywhere. We are searching far and wide to find them. Your wedding will have many, many stories, the ones you planned to perfection, the unexpected ones and our favourite - the quiet ones that went unnoticed.
                            </p>
                            <p>
                                Your mother absent-mindedly holding your father's hand, your friend's sick dance moves, the warmth of a tight hug. It's these little stories you are going to relive over and over again for years to come.
                            </p>
                        </div>
                        <Link to="/about" className="inline-block text-premium-gold uppercase tracking-[0.4em] text-[10px] font-bold border-b border-premium-gold/20 pb-4 hover:border-premium-gold transition-all duration-500">
                            Our Philosophy
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid - Asymmetrical & Stylish */}
            <section className="py-48 bg-premium-black/50 px-8 lg:px-24 relative overflow-hidden">
                <div className="gold-line absolute top-0 left-0" />
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
                        <h2 className="text-7xl md:text-9xl font-display italic text-stroke">Services</h2>
                        <p className="max-w-xs text-premium-cream/30 text-[10px] uppercase tracking-[0.3em] font-bold leading-loose border-l border-premium-gold/20 pl-8">
                            Tailored experiences for those who value the art of documentation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-16 md:gap-24">
                        {/* Service 1 */}
                        <div className="md:col-span-7 group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200"
                                    alt="Wedding Photography"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-8 left-8 text-premium-gold/30 text-6xl font-display opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">01</div>
                            </div>
                            <h3 className="text-4xl font-display mb-4 group-hover:text-premium-gold transition-colors duration-500">Wedding Documentation</h3>
                            <p className="text-premium-cream/40 font-light text-lg">The complete story of your union, captured with cinematic depth.</p>
                        </div>

                        {/* Service 2 */}
                        <div className="md:col-span-5 md:mt-48 group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000"
                                    alt="Pre-Wedding"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-8 left-8 text-premium-gold/30 text-6xl font-display opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">02</div>
                            </div>
                            <h3 className="text-4xl font-display mb-4 group-hover:text-premium-gold transition-colors duration-500">Pre-Wedding Shoots</h3>
                            <p className="text-premium-cream/40 font-light text-lg">Intimate portraits in locations that speak to your journey.</p>
                        </div>

                        {/* Service 3 */}
                        <div className="md:col-span-5 group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
                                    alt="Cinematic Films"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-8 left-8 text-premium-gold/30 text-6xl font-display opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">03</div>
                            </div>
                            <h3 className="text-4xl font-display mb-4 group-hover:text-premium-gold transition-colors duration-500">Cinematic Films</h3>
                            <p className="text-premium-cream/40 font-light text-lg">Moving memories that feel like your own private cinema.</p>
                        </div>

                        {/* Service 4 */}
                        <div className="md:col-span-7 md:-mt-48 group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
                                    alt="Event Coverage"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-8 left-8 text-premium-gold/30 text-6xl font-display opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">04</div>
                            </div>
                            <h3 className="text-4xl font-display mb-4 group-hover:text-premium-gold transition-colors duration-500">Special Events</h3>
                            <p className="text-premium-cream/40 font-light text-lg">From engagements to anniversaries, every milestone matters.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Minimal & Powerful */}
            <section className="py-64 px-8 text-center relative">
                <div className="gold-line absolute top-0 left-0" />
                <div className="max-w-5xl mx-auto space-y-16">
                    <h2 className="text-7xl md:text-[10rem] font-display italic text-premium-cream leading-[0.8]">
                        Let's create <br />
                        <span className="text-premium-gold">something timeless.</span>
                    </h2>
                    <div className="pt-16">
                        <Link to="/booking" className="premium-btn text-xl px-20 py-8">
                            Book Your Story
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
