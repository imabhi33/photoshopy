import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { uploadPhoto, getPhotos, deletePhoto } from '../utils/api';
import { useAdmin } from '../context/AdminContext';

const AdminGallery = () => {
    const { isAdmin } = useAdmin();
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Wedding Stories');
    const [uploading, setUploading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [photos, setPhotos] = useState([]);
    const [loadingPhotos, setLoadingPhotos] = useState(true);

    const categories = ['Wedding Stories', 'Cinematic Films', 'Pre-Wedding', 'Editorial', 'Travel', 'Portraits'];

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    useEffect(() => {
        fetchPhotos();
    }, []);

    const fetchPhotos = async () => {
        try {
            const data = await getPhotos('All');
            setPhotos(data);
        } catch (error) {
            console.error('Error fetching photos:', error);
        } finally {
            setLoadingPhotos(false);
        }
    };

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        if (!selectedFile || !title) {
            setStatus({ type: 'error', message: 'Please select a file and enter a title' });
            return;
        }

        setUploading(true);
        setStatus({ type: '', message: '' });

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append('title', title);
        formData.append('category', category);

        try {
            await uploadPhoto(formData);
            setStatus({ type: 'success', message: 'Photo uploaded successfully!' });
            setSelectedFile(null);
            setPreviewUrl(null);
            setTitle('');
            fetchPhotos(); // Refresh list
        } catch (error) {
            setStatus({ type: 'error', message: error.message || 'Upload failed' });
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this photo?')) return;

        try {
            await deletePhoto(id);
            setPhotos(photos.filter(p => p._id !== id));
        } catch (error) {
            alert('Failed to delete photo');
        }
    };

    return (
        <div className="min-h-screen bg-premium-black pt-28 md:pt-48 pb-16 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-display text-white mb-12">Gallery Admin</h1>

                {/* Upload Section */}
                <div className="bg-white/[0.02] border border-white/5 p-8 mb-16">
                    <h2 className="text-2xl font-display text-premium-gold mb-8">Upload New Photo</h2>

                    {status.message && (
                        <div className={`p-4 mb-6 text-sm tracking-wider uppercase border ${status.type === 'success' ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-red-500 border-red-500/20 bg-red-500/5'}`}>
                            {status.message}
                        </div>
                    )}

                    <form onSubmit={handleUpload} className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <div className="group">
                                <label className="block text-premium-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Photo Title</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full bg-transparent border-b border-white/20 py-3 text-premium-cream focus:border-premium-gold outline-none transition-all duration-300 font-light"
                                    placeholder="Enter title..."
                                />
                            </div>

                            <div className="group">
                                <label className="block text-premium-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-3">Category</label>
                                <select
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                    className="w-full bg-premium-black border-b border-white/20 py-3 text-premium-cream focus:border-premium-gold outline-none transition-all duration-300 font-light"
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="pt-4">
                                <label className="premium-btn cursor-pointer inline-block w-full md:w-auto">
                                    <span>{selectedFile ? 'Change File' : 'Select Photo'}</span>
                                    <input type="file" onChange={handleFileSelect} accept="image/*" className="hidden" />
                                </label>
                                {selectedFile && <span className="block mt-2 text-premium-cream/60 text-sm">{selectedFile.name}</span>}
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-center bg-white/[0.02] border border-white/5 aspect-video relative overflow-hidden">
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
                            ) : (
                                <span className="text-premium-cream/20 uppercase tracking-widest text-xs">No Preview</span>
                            )}
                        </div>

                        <div className="md:col-span-2">
                            <button
                                type="submit"
                                disabled={uploading}
                                className="premium-btn w-full"
                            >
                                {uploading ? 'Uploading...' : 'Upload to Gallery'}
                            </button>
                        </div>
                    </form>
                </div>

                {/* List Section */}
                <div>
                    <h2 className="text-2xl font-display text-premium-gold mb-8">Existing Photos</h2>
                    {loadingPhotos ? (
                        <div className="text-premium-cream/50">Loading...</div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {photos.map(photo => (
                                <div key={photo._id} className="group relative aspect-[4/5] bg-white/[0.02] border border-white/5">
                                    <img src={photo.imageUrl} alt={photo.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                        <p className="text-white font-display text-lg truncate">{photo.title}</p>
                                        <p className="text-premium-gold text-xs uppercase tracking-wider mb-3">{photo.category}</p>
                                        <button
                                            onClick={() => handleDelete(photo._id)}
                                            className="text-red-400 text-xs uppercase tracking-widest hover:text-red-300 text-left"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminGallery;
