import { useState, useEffect } from 'react';
import { useAdmin } from '../context/AdminContext';

const PinModal = ({ isOpen, onClose }) => {
    const [pin, setPin] = useState('');
    const [error, setError] = useState(false);
    const { login } = useAdmin();

    useEffect(() => {
        if (isOpen) {
            setPin('');
            setError(false);
        }
    }, [isOpen]);

    const handlePinSubmit = (e) => {
        e.preventDefault();
        if (login(pin)) {
            onClose();
            // Optional: Redirect or show success message?
            // For now, the context state updates, and UI will react.
        } else {
            setError(true);
            setPin('');
            setTimeout(() => setError(false), 1000); // Clear error shake after 1s
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm transition-all duration-300">
            <div className={`bg-premium-black border border-premium-gold/30 p-8 w-full max-w-sm relative ${error ? 'animate-shake' : ''}`}>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-premium-cream/50 hover:text-premium-gold transition-colors"
                >
                    ✕
                </button>

                <h2 className="text-2xl font-display text-premium-gold text-center mb-6">Admin Access</h2>

                <form onSubmit={handlePinSubmit} className="space-y-6">
                    <div className="text-center">
                        <input
                            type="password"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            maxLength={4}
                            placeholder="Enter PIN"
                            inputMode="numeric"
                            autoFocus
                            className="bg-transparent border-b-2 border-premium-gold/30 text-center text-3xl text-white tracking-[0.5em] w-2/3 py-2 outline-none focus:border-premium-gold transition-colors font-display"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs text-center uppercase tracking-widest font-bold">Invalid PIN</p>
                    )}

                    <button
                        type="submit"
                        className="w-full premium-btn py-3 text-sm"
                    >
                        Unlock
                    </button>
                </form>
            </div>

            <style jsx>{`
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    25% { transform: translateX(-5px); }
                    75% { transform: translateX(5px); }
                }
                .animate-shake {
                    animation: shake 0.2s ease-in-out 0s 2;
                }
            `}</style>
        </div>
    );
};

export default PinModal;
