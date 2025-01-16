/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    darkMode: 'class',
    theme: {
        extend: {
            keyframes: {
                shimmer: {
                    '0%': {
                        transform: 'translateX(-100%)',
                    },
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
            },
            colors: {
                // Mode clair
                light: {
                    primary: '#FFFFFF',      // Fond principal
                    secondary: '#F8F8F8',    // Fond secondaire
                    text: {
                        primary: '#333333',    // Texte principal
                        secondary: '#666666',   // Texte secondaire
                    },
                    accent: {
                        primary: '#FF4B4B',    // Accent (logo)
                        secondary: '#E43D3D',   // Accent secondaire
                    },
                    border: '#E5E5E5',       // Bordures
                    surface: '#FFFFFF',      // Surface des composants
                },
                // Mode sombre
                dark: {
                    primary: '#121212',      // Fond principal
                    secondary: '#1E1E1E',    // Fond secondaire
                    text: {
                        primary: '#F5F5F5',    // Texte principal
                        secondary: '#BBBBBB',   // Texte secondaire
                    },
                    accent: {
                        primary: '#FF6B6B',    // Accent (logo)
                        secondary: '#FF4B4B',   // Accent secondaire
                    },
                    border: '#2D2D2D',       // Bordures
                    surface: '#242424',      // Surface des composants
                }
            },
            animation: {
                'shimmer': 'shimmer 2s infinite',
            },
        },
    },
    plugins: [],
}