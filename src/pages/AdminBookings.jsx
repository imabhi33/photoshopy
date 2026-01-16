import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getBookings, updateBookingStatus } from '../utils/api';
import { useAdmin } from '../context/AdminContext';

const AdminBookings = () => {
    const { isAdmin } = useAdmin();
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Redirect if not admin
    if (!isAdmin) {
        return <Navigate to="/" replace />;
    }

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const data = await getBookings();
            if (data.success) {
                setBookings(data.data);
            } else {
                setError('Failed to fetch bookings');
            }
        } catch (err) {
            setError(err.message || 'Error loading bookings');
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id, newStatus) => {
        try {
            const data = await updateBookingStatus(id, newStatus);
            if (data.success) {
                // Update local state to reflect change immediately
                setBookings(prev => prev.map(booking =>
                    booking._id === id ? { ...booking, status: newStatus } : booking
                ));
            }
        } catch (err) {
            alert('Failed to update status: ' + err.message);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'confirmed': return 'text-green-400 border-green-400/30 bg-green-400/10';
            case 'cancelled': return 'text-red-400 border-red-400/30 bg-red-400/10';
            default: return 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10';
        }
    };

    return (
        <div className="min-h-screen bg-premium-black pt-28 md:pt-36 pb-16 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-display text-white">Guest Bookings</h1>
                    <div className="text-premium-gold/60 font-light text-sm hidden md:block">
                        Total Requests: <span className="text-white font-bold">{bookings.length}</span>
                    </div>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-premium-gold"></div>
                    </div>
                ) : error ? (
                    <div className="text-red-400 text-center py-20 bg-white/5 border border-red-500/20 rounded-lg">
                        {error}
                    </div>
                ) : bookings.length === 0 ? (
                    <div className="text-premium-cream/40 text-center py-20 bg-white/[0.02] border border-white/5 rounded-lg font-light">
                        No bookings found yet.
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Mobile Cards View */}
                        <div className="md:hidden space-y-4">
                            {bookings.map((booking) => (
                                <div key={booking._id} className="bg-white/[0.03] border border-white/10 p-5 rounded-lg space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-white font-display text-lg">{booking.name}</h3>
                                            <p className="text-premium-gold/80 text-sm mt-1">{booking.eventType}</p>
                                        </div>
                                        <span className={`px-2 py-1 text-[10px] uppercase tracking-widest border rounded transition-colors ${getStatusColor(booking.status)}`}>
                                            {booking.status}
                                        </span>
                                    </div>

                                    <div className="space-y-2 text-sm text-premium-cream/60">
                                        <p className="flex items-center gap-2">
                                            <span>📅</span> {formatDate(booking.eventDate)}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span>📍</span> {booking.location}
                                        </p>
                                        <p className="flex items-center gap-2 break-all">
                                            <span>✉️</span> {booking.email}
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <span>📞</span> {booking.phone}
                                        </p>
                                    </div>

                                    {booking.message && (
                                        <div className="pt-3 border-t border-white/5">
                                            <p className="text-xs text-white/40 italic">"{booking.message}"</p>
                                        </div>
                                    )}

                                    <div className="grid grid-cols-3 gap-2 pt-2">
                                        <button
                                            onClick={() => handleStatusUpdate(booking._id, 'pending')}
                                            className={`py-2 text-[10px] uppercase tracking-wider border transition-colors ${booking.status === 'pending' ? 'bg-yellow-400/20 border-yellow-400 text-yellow-400' : 'border-white/10 text-white/30 hover:bg-white/5'}`}
                                        >
                                            Pending
                                        </button>
                                        <button
                                            onClick={() => handleStatusUpdate(booking._id, 'confirmed')}
                                            className={`py-2 text-[10px] uppercase tracking-wider border transition-colors ${booking.status === 'confirmed' ? 'bg-green-400/20 border-green-400 text-green-400' : 'border-white/10 text-white/30 hover:bg-white/5'}`}
                                        >
                                            Confirm
                                        </button>
                                        <button
                                            onClick={() => handleStatusUpdate(booking._id, 'cancelled')}
                                            className={`py-2 text-[10px] uppercase tracking-wider border transition-colors ${booking.status === 'cancelled' ? 'bg-red-400/20 border-red-400 text-red-400' : 'border-white/10 text-white/30 hover:bg-white/5'}`}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Desktop Table View */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/10 text-premium-gold/60 text-xs uppercase tracking-widest">
                                        <th className="pb-4 pl-4">Client</th>
                                        <th className="pb-4">Event</th>
                                        <th className="pb-4">Date & Location</th>
                                        <th className="pb-4">Contact</th>
                                        <th className="pb-4">Status</th>
                                        <th className="pb-4 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm text-premium-cream/80">
                                    {bookings.map((booking) => (
                                        <tr key={booking._id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                            <td className="py-6 pl-4">
                                                <div className="font-bold text-white">{booking.name}</div>
                                                {booking.message && <div className="text-xs text-white/30 mt-1 max-w-[200px] truncate" title={booking.message}>"{booking.message}"</div>}
                                            </td>
                                            <td className="py-6">{booking.eventType}</td>
                                            <td className="py-6">
                                                <div className="text-white">{formatDate(booking.eventDate)}</div>
                                                <div className="text-xs text-white/40 mt-1">{booking.location}</div>
                                            </td>
                                            <td className="py-6">
                                                <div>{booking.email}</div>
                                                <div className="text-xs text-white/40 mt-1">{booking.phone}</div>
                                            </td>
                                            <td className="py-6">
                                                <span className={`px-2 py-1 text-[10px] uppercase tracking-widest border rounded ${getStatusColor(booking.status)}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="py-6">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking._id, 'confirmed')}
                                                        title="Confirm"
                                                        className="p-2 hover:bg-green-400/10 text-white/30 hover:text-green-400 rounded transition-colors"
                                                    >
                                                        ✓
                                                    </button>
                                                    <button
                                                        onClick={() => handleStatusUpdate(booking._id, 'cancelled')}
                                                        title="Cancel"
                                                        className="p-2 hover:bg-red-400/10 text-white/30 hover:text-red-400 rounded transition-colors"
                                                    >
                                                        ✕
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminBookings;
