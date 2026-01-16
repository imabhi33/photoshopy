import { Link, Navigate } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';

const AdminDashboard = () => {
    const { isAdmin, logout } = useAdmin();

    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="min-h-screen bg-premium-black pt-28 md:pt-48 pb-16 px-4 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-4xl md:text-6xl font-display text-white">Admin Dashboard</h1>
                    <button
                        onClick={logout}
                        className="text-red-400 text-sm uppercase tracking-widest hover:text-red-300 transition-colors"
                    >
                        Logout
                    </button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Gallery Card */}
                    <Link to="/admin/gallery" className="group bg-white/[0.02] border border-white/5 p-8 hover:border-premium-gold/30 transition-all duration-300">
                        <div className="h-12 w-12 bg-premium-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-premium-gold/20 transition-colors">
                            <span className="text-2xl">📷</span>
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">Manage Gallery</h3>
                        <p className="text-premium-cream/50 text-sm font-light">Upload new photos and manage existing gallery collections.</p>
                    </Link>

                    {/* Bookings Card */}
                    <Link to="/admin/bookings" className="group bg-white/[0.02] border border-white/5 p-8 hover:border-premium-gold/30 transition-all duration-300">
                        <div className="h-12 w-12 bg-premium-gold/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-premium-gold/20 transition-colors">
                            <span className="text-2xl">📅</span>
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">View Bookings</h3>
                        <p className="text-premium-cream/50 text-sm font-light">See upcoming event bookings and client requests.</p>
                    </Link>

                    {/* Contacts Card (Placeholder for now) */}
                    <div className="group bg-white/[0.02] border border-white/5 p-8 hover:border-premium-gold/30 transition-all duration-300 opacity-50 cursor-not-allowed">
                        <div className="h-12 w-12 bg-premium-gold/10 rounded-full flex items-center justify-center mb-6">
                            <span className="text-2xl">✉️</span>
                        </div>
                        <h3 className="text-xl font-display text-white mb-3">Contact Messages</h3>
                        <p className="text-premium-cream/50 text-sm font-light">Read inquiries from the contact form. (Coming Soon)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
