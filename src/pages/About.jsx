import { useEffect, useState } from 'react';

const About = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="min-h-screen bg-premium-black pt-28 md:pt-48 pb-16 md:pb-24 relative overflow-hidden">
            {/* Decorative Background Text */}
            <div className="decorative-text top-[5%] -right-[5%]">ESSENCE</div>
            <div className="decorative-text top-[50%] -left-[10%] rotate-90">VISION</div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
                {/* Header Section */}
                <div className="mb-24 md:mb-48 text-center">
                    <div className="text-reveal-container mb-4 md:mb-6">
                        <span className={`block text-premium-gold uppercase tracking-[0.6em] md:tracking-[0.8em] text-[8px] md:text-[10px] font-bold transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                            Our Essence
                        </span>
                    </div>
                    <h1 className="section-title-premium text-white leading-[1.1] md:leading-[0.9]">
                        About <span className="italic text-premium-gold">Photoshopy</span>
                    </h1>
                    <p className={`text-premium-cream/30 uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] font-bold transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                        Capturing Stories, Creating Memories
                    </p>
                </div>

                {/* Story Section - Overlapping Layout */}
                <div className="grid lg:grid-cols-12 gap-8 md:gap-24 items-center mb-32 md:mb-64 relative">
                    <div className="lg:col-span-7 relative group">
                        <div className="aspect-[16/9] overflow-hidden border border-white/5">
                            <img
                                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200"
                                alt="Our Story"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                        <div className="hidden md:block absolute -bottom-16 -right-16 w-1/2 aspect-square border border-premium-gold/10 -z-10 group-hover:border-premium-gold/30 transition-colors duration-700" />
                    </div>
                    <div className="lg:col-span-5 space-y-8 md:space-y-12 lg:-ml-32 z-10 bg-premium-black/90 backdrop-blur-md p-6 md:p-16 border border-white/10 shadow-2xl mt-4 md:mt-0">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-premium-gold">Our Story</h2>
                        <div className="space-y-6 md:space-y-8 text-premium-cream/60 font-light leading-relaxed text-base md:text-lg">
                            <p>
                                At Photoshopy, we believe that every moment tells a story. Founded with a passion for capturing life's most precious moments, we have dedicated ourselves to the art of photography and cinematography.
                            </p>
                            <p>
                                Our journey began with a simple vision: to create timeless memories that families can cherish for generations. Today, we are proud to be one of the leading photography studios, specializing in weddings, pre-wedding shoots, and special events.
                            </p>
                        </div>
                        <div className="pt-4">
                            <div className="w-16 md:w-24 h-[1px] bg-premium-gold/40" />
                        </div>
                    </div>
                </div>

                {/* Philosophy Section - Quote Style */}
                <div className="max-w-5xl mx-auto text-center mb-32 md:mb-64 relative px-4">
                    <div className="gold-line absolute -top-16 md:-top-24 left-0" />
                    <span className="text-7xl md:text-9xl font-display text-premium-gold/10 block mb-6 md:mb-12">"</span>
                    <p className="text-3xl md:text-4xl lg:text-6xl font-display italic text-premium-cream leading-tight mb-8 md:mb-12">
                        Stories are everywhere. We are searching far and wide to find them. Your wedding will have many, many stories.
                    </p>
                    <div className="w-24 md:w-32 h-[1px] bg-premium-gold/40 mx-auto mb-8 md:mb-12" />
                    <p className="text-premium-gold uppercase tracking-[0.4em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold">
                        The Philosophy of Photoshopy
                    </p>
                    <div className="gold-line absolute -bottom-16 md:-bottom-24 left-0" />
                </div>

                {/* Features Grid - Minimal & Stylish */}
                <div className="grid md:grid-cols-3 gap-12 md:gap-24 mb-32 md:mb-64">
                    {[
                        {
                            title: 'Artistic Vision',
                            desc: 'We see the world through a lens of poetry and light, finding beauty in the smallest details.',
                            icon: '01'
                        },
                        {
                            title: 'Cinematic Depth',
                            desc: 'Our films and photographs possess a depth that transcends the visual, capturing the soul.',
                            icon: '02'
                        },
                        {
                            title: 'Timeless Quality',
                            desc: 'We create work that remains as powerful and moving decades from now as it is today.',
                            icon: '03'
                        }
                    ].map((feature, index) => (
                        <div key={index} className="space-y-6 md:space-y-10 group relative">
                            <span className="text-premium-gold/10 text-6xl md:text-8xl font-display block group-hover:text-premium-gold/30 transition-all duration-700 group-hover:-translate-y-4">{feature.icon}</span>
                            <div className="space-y-4 md:space-y-6">
                                <h3 className="text-2xl md:text-3xl font-display text-premium-gold">{feature.title}</h3>
                                <p className="text-premium-cream/50 font-light leading-relaxed text-base md:text-lg">{feature.desc}</p>
                            </div>
                            <div className="absolute -bottom-8 left-0 w-0 h-[1px] bg-premium-gold/20 transition-all duration-700 group-hover:w-full" />
                        </div>
                    ))}
                </div>

                {/* Team Section - Cinematic */}
                <div className="relative py-16 md:py-32 px-6 md:px-16 border border-white/5 overflow-hidden group">
                    <div className="absolute inset-0 bg-premium-gold/[0.02] -z-10 group-hover:bg-premium-gold/[0.04] transition-all duration-700" />
                    <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-display italic">The Storytellers</h2>
                        <p className="text-premium-cream/60 font-light leading-relaxed text-lg md:text-xl">
                            Our team of passionate photographers and videographers brings years of experience and creative expertise to every project. We're not just service providers; we're storytellers dedicated to preserving your most precious moments.
                        </p>
                        <div className="pt-8 md:pt-12">
                            <button className="premium-btn">Join Our Journey</button>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 w-16 h-16 md:w-24 md:h-24 border-t border-l border-premium-gold/20" />
                    <div className="absolute bottom-0 right-0 w-16 h-16 md:w-24 md:h-24 border-b border-r border-premium-gold/20" />
                </div>
            </div>
        </div>
    );
};

export default About;
