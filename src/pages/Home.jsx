import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Home = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-premium-black relative overflow-x-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[5%] -left-[10%] opacity-[0.02]">CINEMA</div>
            <div className="decorative-text top-[30%] -right-[20%] rotate-90 opacity-[0.01]">SOUL</div>
            <div className="decorative-text bottom-[5%] -left-[15%] opacity-[0.02]">STORY</div>

            {/* Hero Section */}
            <section className="relative min-h-[100dvh] flex flex-col items-center overflow-hidden pt-28 pb-12 md:pt-32">
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
                <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl mx-auto flex-grow flex flex-col justify-center items-center w-full">
                    <div className="flex flex-col items-center mb-8 md:mb-12 group cursor-default">
                        <div className="w-8 md:w-12 h-[1px] bg-premium-gold/30 mb-4 md:mb-6 transition-all duration-700 group-hover:w-16 md:group-hover:w-24 group-hover:bg-premium-gold" />
                        <div className="text-reveal-container">
                            <span className={`block text-premium-cream/80 uppercase tracking-[0.8em] md:tracking-[1.2em] text-[8px] md:text-[9px] font-bold transition-all duration-1000 delay-300 group-hover:text-premium-gold group-hover:tracking-[1em] md:group-hover:tracking-[1.5em] ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                                Soul <span className="text-premium-gold mx-2">+</span> Cinema
                            </span>
                        </div>
                        <div className="w-8 md:w-12 h-[1px] bg-premium-gold/30 mt-4 md:mt-6 transition-all duration-700 group-hover:w-16 md:group-hover:w-24 group-hover:bg-premium-gold" />
                    </div>

                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-light text-white mb-8 md:mb-16 leading-[1.1] md:leading-[0.85]">
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

                    <div className={`transition-all duration-1000 delay-1000 w-full px-4 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <p className="text-sm md:text-xl text-premium-cream/60 mb-10 md:mb-20 max-w-xl md:max-w-2xl mx-auto font-light leading-relaxed">
                            We don't just take photographs. We preserve emotions, whispers, and the quiet magic of your most precious moments.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 md:gap-8 justify-center items-center w-full sm:w-auto">
                            <Link to="/photography" className="premium-btn w-full sm:w-auto">
                                Explore Photography
                            </Link>
                            <Link to="/packages" className="w-full sm:w-auto text-premium-gold uppercase tracking-[0.3em] text-[9px] md:text-[10px] font-bold border border-premium-gold/20 px-8 py-3 md:px-12 md:py-5 hover:bg-premium-gold hover:text-premium-black transition-all duration-500 text-center">
                                View Packages
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-20 md:py-32 lg:py-48 px-4 md:px-8 lg:px-24 relative overflow-hidden">
                <div className="gold-line absolute top-0 left-0" />
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-32 items-center">
                    <div className="relative group mx-auto w-full max-w-lg lg:max-w-none">
                        <div className="aspect-[4/5] overflow-hidden border border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=1000"
                                alt="Philosophy"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />
                        </div>
                        <div className="hidden md:block absolute -bottom-16 -right-16 w-2/3 aspect-square border border-premium-gold/10 -z-10 group-hover:border-premium-gold/30 transition-colors duration-700" />
                        <div className="absolute -top-8 -left-8 md:-top-16 md:-left-16 w-1/2 aspect-square bg-premium-gold/[0.02] -z-10" />
                        <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 text-[8px] md:text-[10px] uppercase tracking-[0.8em] md:tracking-[1em] font-bold text-premium-gold/20 -rotate-90 whitespace-nowrap origin-center">PHILOSOPHY</div>
                    </div>

                    <div className="space-y-8 md:space-y-12 lg:space-y-16 text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl lg:text-8xl font-display italic leading-[1.1] md:leading-[0.85]">
                            A Home for <br />
                            <span className="text-premium-gold">Your Stories</span>
                        </h2>
                        <div className="space-y-6 md:space-y-10 text-premium-cream/60 font-light leading-relaxed text-base md:text-xl">
                            <p>
                                Stories are everywhere. We are searching far and wide to find them. Your wedding will have many, many stories, the ones you planned to perfection, the unexpected ones and our favourite - the quiet ones that went unnoticed.
                            </p>
                            <p>
                                Your mother absent-mindedly holding your father's hand, your friend's sick dance moves, the warmth of a tight hug. It's these little stories you are going to relive over and over again for years to come.
                            </p>
                        </div>
                        <Link to="/about" className="inline-block text-premium-gold uppercase tracking-[0.3em] md:tracking-[0.4em] text-[9px] md:text-[10px] font-bold border-b border-premium-gold/20 pb-4 hover:border-premium-gold transition-all duration-500">
                            Our Philosophy
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services Grid - Asymmetrical & Stylish */}
            <section className="py-20 md:py-32 lg:py-48 bg-premium-black/50 px-4 md:px-8 lg:px-24 relative overflow-hidden">
                <div className="gold-line absolute top-0 left-0" />
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-6 md:gap-12">
                        <h2 className="text-5xl md:text-7xl lg:text-9xl font-display italic text-stroke">Services</h2>
                        <p className="max-w-xs text-premium-cream/30 text-[9px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold leading-loose border-l border-premium-gold/20 pl-6 md:pl-8 hidden md:block">
                            Tailored experiences for those who value the art of documentation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-12 gap-12 md:gap-16 lg:gap-24">
                        {/* Service 1 */}
                        <div className="md:col-span-7 group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden mb-6 md:mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200"
                                    alt="Wedding Photography"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-premium-gold/30 text-4xl md:text-6xl font-display opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">01</div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display mb-2 md:mb-4 group-hover:text-premium-gold transition-colors duration-500">Wedding Documentation</h3>
                            <p className="text-premium-cream/40 font-light text-base md:text-lg">The complete story of your union, captured with cinematic depth.</p>
                        </div>

                        {/* Service 2 */}
                        <div className="md:col-span-5 md:mt-48 group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=1000"
                                    alt="Pre-Wedding"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-premium-gold/30 text-4xl md:text-6xl font-display opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">02</div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display mb-2 md:mb-4 group-hover:text-premium-gold transition-colors duration-500">Pre-Wedding Shoots</h3>
                            <p className="text-premium-cream/40 font-light text-base md:text-lg">Intimate portraits in locations that speak to your journey.</p>
                        </div>

                        {/* Service 3 */}
                        <div className="md:col-span-5 group cursor-pointer">
                            <div className="relative aspect-[4/5] overflow-hidden mb-6 md:mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=1000"
                                    alt="Cinematic Films"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-premium-gold/30 text-4xl md:text-6xl font-display opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">03</div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display mb-2 md:mb-4 group-hover:text-premium-gold transition-colors duration-500">Cinematic Films</h3>
                            <p className="text-premium-cream/40 font-light text-base md:text-lg">Moving memories that feel like your own private cinema.</p>
                        </div>

                        {/* Service 4 */}
                        <div className="md:col-span-7 md:-mt-48 group cursor-pointer">
                            <div className="relative aspect-video overflow-hidden mb-6 md:mb-10 border border-white/5">
                                <img
                                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200"
                                    alt="Event Coverage"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-premium-black/40 group-hover:bg-premium-black/60 transition-all duration-700" />
                                <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-premium-gold/30 text-4xl md:text-6xl font-display opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-700 md:translate-y-4 md:group-hover:translate-y-0">04</div>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-display mb-2 md:mb-4 group-hover:text-premium-gold transition-colors duration-500">Special Events</h3>
                            <p className="text-premium-cream/40 font-light text-base md:text-lg">From engagements to anniversaries, every milestone matters.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section - Minimal & Powerful */}
            <section className="py-24 md:py-48 lg:py-64 px-4 md:px-8 text-center relative">
                <div className="gold-line absolute top-0 left-0" />
                <div className="max-w-5xl mx-auto space-y-8 md:space-y-16">
                    <h2 className="text-5xl md:text-8xl lg:text-[10rem] font-display italic text-premium-cream leading-[1] md:leading-[0.8]">
                        Let's create <br />
                        <span className="text-premium-gold">something timeless.</span>
                    </h2>
                    <div className="pt-8 md:pt-16">
                        <Link to="/booking" className="premium-btn text-base md:text-xl px-10 md:px-20 py-5 md:py-8 inline-block">
                            Book Your Story
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
