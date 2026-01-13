module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        'glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(34, 211, 238, 0.8)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'glow': 'glow 2s ease-in-out infinite'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      colors: {
        dark: {
          50: '#f9fafb',
          100: '#f3f4f6',
          900: '#111827',
          950: '#030712'
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}
