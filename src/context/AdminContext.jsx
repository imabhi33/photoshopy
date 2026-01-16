import { createContext, useContext, useState, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        // Check local storage on initial load
        const token = localStorage.getItem('adminToken');
        if (token === 'valid_session_2024') {
            setIsAdmin(true);
        }
    }, []);

    const login = (pin) => {
        // Hardcoded PIN for simplicity as requested
        // In a real app, this should valid against backend
        if (pin === '2024') {
            setIsAdmin(true);
            localStorage.setItem('adminToken', 'valid_session_2024');
            return true;
        }
        return false;
    };

    const logout = () => {
        setIsAdmin(false);
        localStorage.removeItem('adminToken');
    };

    return (
        <AdminContext.Provider value={{ isAdmin, login, logout }}>
            {children}
        </AdminContext.Provider>
    );
};
