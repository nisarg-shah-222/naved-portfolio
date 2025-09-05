/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0e0e0e',
        'dark-card': '#1a1a1a',
        'dark-text': '#d4d4d4',
        'dark-secondary': '#7a7a7a',
        'accent-purple': '#8b5cf6',
        'accent-pink': '#ec4899',
        'accent-blue': '#3b82f6',
        'accent-green': '#10b981',
        'accent-yellow': '#f59e0b',
        'accent-red': '#ef4444',
        'accent-teal': '#14b8a6',
        'accent-orange': '#f97316',
        'accent-indigo': '#6366f1',
        'light-bg': '#f5f5f5',
        'light-card': '#ffffff',
        'light-text': '#333333',
        'light-secondary': '#666666',
        'light-tertiary': '#999999',
      },
      gradientColorStops: {
        'from-dark': '#0e0e0e',
        'to-dark': '#0e0e0e',
        'from-light': '#f5f5f5',
        'to-light': '#f5f5f5',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      backgroundImage: {
        'gradient-dark-to-purple': 'linear-gradient(135deg, #0e0e0e 0%, #8b5cf6 100%)',
        'gradient-dark-to-pink': 'linear-gradient(135deg, #0e0e0e 0%, #ec4899 100%)',
        'gradient-dark-to-blue': 'linear-gradient(135deg, #0e0e0e 0%, #3b82f6 100%)',
        'gradient-dark-to-green': 'linear-gradient(135deg, #0e0e0e 0%, #10b981 100%)',
        'gradient-dark-to-yellow': 'linear-gradient(135deg, #0e0e0e 0%, #f59e0b 100%)',
        'gradient-dark-to-red': 'linear-gradient(135deg, #0e0e0e 0%, #ef4444 100%)',
        'gradient-dark-to-teal': 'linear-gradient(135deg, #0e0e0e 0%, #14b8a6 100%)',
        'gradient-dark-to-orange': 'linear-gradient(135deg, #0e0e0e 0%, #f97316 100%)',
        'gradient-dark-to-indigo': 'linear-gradient(135deg, #0e0e0e 0%, #6366f1 100%)',
        'gradient-accent-purple': 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
        'gradient-accent-blue': 'linear-gradient(135deg, #3b82f6 0%, #10b981 100%)',
        'gradient-accent-yellow': 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
        'gradient-accent-pink': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
      }
    },
  },
  plugins: [],
}
