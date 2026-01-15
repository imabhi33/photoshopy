/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'premium-black': '#0A0A0A',
                'premium-gold': '#D4AF37',
                'premium-cream': '#FDFCF0',
                'premium-gray': '#1A1A1A',
                'premium-silver': '#C0C0C0',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['"Playfair Display"', 'serif'],
                display: ['"Cormorant Garamond"', 'serif'],
            },
            boxShadow: {
                'premium': '0 0 30px rgba(212, 175, 55, 0.2)',
            },
            transitionTimingFunction: {
                'premium': 'cubic-bezier(0.77, 0, 0.175, 1)',
            },
            animation: {
                'reveal-up': 'revealUp 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'reveal-down': 'revealDown 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards',
                'fade-in': 'fadeIn 1.5s ease-out forwards',
                'scale-up': 'scaleUp 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) forwards',
                'parallax': 'parallax 10s linear infinite alternate',
            },
            keyframes: {
                revealUp: {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                revealDown: {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleUp: {
                    '0%': { transform: 'scale(1.1)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                parallax: {
                    '0%': { transform: 'scale(1.05) translateY(0)' },
                    '100%': { transform: 'scale(1.05) translateY(-2%)' },
                }
            },
        },
    },
    plugins: [],
}
