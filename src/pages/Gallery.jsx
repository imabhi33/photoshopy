import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPhotos } from '../utils/api';

const Gallery = () => {
    const { category } = useParams();
    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    // Map URL slug to Category Name if needed, or pass exact string
    // Here we assume the link passes the exact category string or we map it
    // For simplicity, let's assume we pass the exact string in the URL for now
    // or decode it. Ideally slugs are kebab-case ("wedding-stories") and we map to "Wedding Stories"

    const categoryMap = {
        'wedding-stories': 'Wedding Stories',
        'cinematic-films': 'Cinematic Films',
        'pre-wedding': 'Pre-Wedding',
        'editorial': 'Editorial',
        'travel': 'Travel',
        'portraits': 'Portraits'
    };

    const categoryTitle = categoryMap[category] || category.replace(/-/g, ' ');

    useEffect(() => {
        setIsLoaded(true);
        fetchGallery();
    }, [category]);

    const fetchGallery = async () => {
        try {
            // We pass the mapped title to the API
            const data = await getPhotos(categoryTitle);
            setPhotos(data);
        } catch (error) {
            console.error('Error fetching gallery:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-premium-black pt-28 md:pt-48 pb-16 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="decorative-text top-[5%] right-[0%] opacity-10">{categoryTitle.split(' ')[0]}</div>

            <div className="max-w-[1800px] mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="mb-12 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
                    <div>
                        <Link to="/photography" className="text-premium-gold uppercase tracking-[0.3em] text-[10px] font-bold mb-6 inline-block hover:opacity-70 transition-opacity">
                            ← Back to Collections
                        </Link>
                        <h1 className="text-4xl md:text-8xl font-display text-white leading-[0.9]">
                            {categoryTitle}
                        </h1>
                    </div>
                    <div className="text-premium-cream/60 font-light max-w-md text-sm md:text-base">
                        Explore our curated selection of {categoryTitle.toLowerCase()}. Each image tells a unique story of emotion, light, and timeless beauty.
                    </div>
                </div>

                {/* Gallery Grid */}
                {loading ? (
                    <div className="min-h-[50vh] flex items-center justify-center">
                        <div className="w-12 h-[1px] bg-premium-gold animate-pulse"></div>
                    </div>
                ) : photos.length > 0 ? (
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                        {photos.map((photo, index) => (
                            <div
                                key={photo._id}
                                className={`break-inside-avoid relative group overflow-hidden transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <img
                                    src={photo.imageUrl}
                                    alt={photo.title}
                                    className="w-full h-auto object-cover grayscale md:grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <span className="text-premium-gold font-display text-2xl italic">{photo.title}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="min-h-[30vh] flex flex-col items-center justify-center text-premium-cream/40">
                        <p className="font-display italic text-2xl mb-4">Gallery Coming Soon</p>
                        <p className="text-sm font-light">We are currently curating this collection.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;
