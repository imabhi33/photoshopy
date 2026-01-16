import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Contact API
export const submitContact = async (contactData) => {
    try {
        const response = await api.post('/contact', contactData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to submit contact form' };
    }
};

// Booking API
export const submitBooking = async (bookingData) => {
    try {
        const response = await api.post('/bookings', bookingData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to submit booking' };
    }
};

export const getBookings = async () => {
    try {
        const response = await api.get('/bookings');
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch bookings' };
    }
};

export const updateBookingStatus = async (id, status) => {
    try {
        const response = await api.patch(`/bookings/${id}`, { status });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to update booking status' };
    }
};

// Gallery API
export const uploadPhoto = async (formData) => {
    try {
        const response = await api.post('/gallery/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to upload photo' };
    }
};

export const getPhotos = async (category) => {
    try {
        const response = await api.get('/gallery', {
            params: { category }
        });
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to fetch photos' };
    }
};

export const deletePhoto = async (id) => {
    try {
        const response = await api.delete(`/gallery/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: 'Failed to delete photo' };
    }
};

export default api;
