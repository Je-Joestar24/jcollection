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
      }
    },
  },
  plugins: [],
}
