import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/*
 * CUBE theme tokens (from cube-theme-kit/tailwind.preset.js), merged into the
 * project config. Legacy `dark` / `electric` colours are kept so nothing that
 * still references them breaks.
 */

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                // Legacy (pre-CUBE) colours
                dark: {
                    900: '#050510',
                    800: '#0a0a1a',
                    700: '#0d1127',
                    600: '#131836',
                    500: '#1a2044',
                },
                electric: {
                    400: '#38bdf8',
                    500: '#0ea5e9',
                    600: '#0284c7',
                },

                // CUBE semantic tokens
                ink: {
                    DEFAULT: '#24272B', // primary text
                    muted: '#747B83', // secondary text
                    soft: '#4A5568', // tertiary / list text
                },
                sky: {
                    50: '#F6FAFD', // lightest wash
                    100: '#EAF2F8', // signature surface
                    200: '#DCEAF4',
                    300: '#BDD7E8', // signature border
                    350: '#BBD6EA',
                    400: '#8EBCE0', // hover border
                    500: '#5B9BD5', // mid accent
                },
                amber: {
                    DEFAULT: '#D99A42', // accent
                    deep: '#C77B60', // accent hover
                },
                line: '#E5E7EB',
                canvas: '#F0F4F8',
                navy: {
                    DEFAULT: '#070E5C',
                    950: '#070E5C',
                    900: '#0B156F',
                    850: '#101D82',
                    800: '#162594',
                    700: '#1E33B0',
                    600: '#2B43CB',
                    hover: '#0A1682',
                    50: '#F0F2FA',
                },
                gold: {
                    DEFAULT: '#D7A00F',
                    600: '#BF8C0B',
                    500: '#D7A00F',
                    400: '#E3B127',
                    300: '#EEC450',
                    200: '#F6DA86',
                    100: '#FDF6DE',
                    50: '#FFFCF4',
                },
                silver: {
                    DEFAULT: '#C4CAD8',
                    300: '#D6DBE5',
                    400: '#C4CAD8',
                    500: '#A9B1C3',
                },
                'light-grey': '#F4F5F8',
            },
            fontFamily: {
                sans: ['Inter', ...defaultTheme.fontFamily.sans],
                display: ['Manrope', 'Inter', 'sans-serif'],
                serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            borderRadius: {
                frame: '44px',
            },
            boxShadow: {
                cube: '0 10px 30px -10px rgba(7, 14, 92, 0.12), 0 4px 6px -4px rgba(7, 14, 92, 0.08)',
                'cube-hover': '0 20px 40px -15px rgba(7, 14, 92, 0.22), 0 8px 16px -6px rgba(215, 160, 15, 0.22)',
                'cube-glow': '0 0 25px rgba(215, 160, 15, 0.4)',
                'cube-navy-glow': '0 0 25px rgba(7, 14, 92, 0.45)',
                'glass-sm': '0 4px 16px rgba(7, 14, 92, 0.04), inset 0 1px 1px rgba(255, 255, 255, 0.9)',
                glass: '0 12px 40px rgba(7, 14, 92, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
                'glass-lg': '0 25px 60px rgba(7, 14, 92, 0.12), 0 1px 3px rgba(0, 0, 0, 0.05)',
                frame: '0 24px 80px rgba(7, 14, 92, 0.12), 0 4px 24px rgba(36, 39, 43, 0.04), inset 0 1.5px 2px rgba(255, 255, 255, 1)',
            },
            transitionTimingFunction: {
                cube: 'cubic-bezier(0.16, 1, 0.3, 1)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-up': 'slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                pulseSubtle: {
                    '0%, 100%': { opacity: '1' },
                    '50%': { opacity: '0.85' },
                },
            },
        },
    },

    plugins: [forms],
};
