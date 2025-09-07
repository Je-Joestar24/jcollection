/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--theme-primary)",
        secondary: "var(--theme-secondary)",
        accent: "var(--theme-accent)",
        success: "var(--theme-success)",
        warning: "var(--theme-warning)",
        error: "var(--theme-error)",
        bg: "var(--theme-bg)",
        bgSecondary: "var(--theme-bg-secondary)",
        bgTertiary: "var(--theme-bg-tertiary)",
        card: "var(--theme-bg-card)",
        overlay: "var(--theme-bg-overlay)",
        text: "var(--theme-text)",
        textSecondary: "var(--theme-text-secondary)",
        textMuted: "var(--theme-text-muted)",
        textInverse: "var(--theme-text-inverse)",
        border: "var(--theme-border)",
        borderSecondary: "var(--theme-border-secondary)",
        borderAccent: "var(--theme-border-accent)",
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'count-up': 'count-up 2s ease-out',
        'progress-bar': 'progress-bar 2s ease-out',
        'auth-btn': 'auth-btn 0.3s ease-out',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        'count-up': {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'progress-bar': {
          '0%': { width: '0%' },
          '100%': { width: '75%' },
        },
        'auth-btn': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}
