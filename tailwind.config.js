/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Main theme
        background: "hsl(var(--background) / <alpha-value>)",
        foreground: "hsl(var(--foreground) / <alpha-value>)",
        card: "hsl(var(--card) / <alpha-value>)",
        cardForeground: "hsl(var(--card-foreground) / <alpha-value>)",

        // Brand colors
        primary: "hsl(var(--primary) / <alpha-value>)",
        secondary: "hsl(var(--secondary) / <alpha-value>)",
        accent: "hsl(var(--accent) / <alpha-value>)",
        pink: "hsl(var(--pink) / <alpha-value>)",
        green: "hsl(var(--green) / <alpha-value>)",

        // Utility colors
        destructive: "hsl(var(--destructive) / <alpha-value>)",
        muted: "hsl(var(--muted) / <alpha-value>)",
        mutedForeground: "hsl(var(--muted-foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        ring: "hsl(var(--ring) / <alpha-value>)",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        exo2: ["Exo 2", "sans-serif"],
      },
      boxShadow: {
        // Neon/glow shadows
        primary: "0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary))",
        secondary: "0 0 10px hsl(var(--secondary)), 0 0 20px hsl(var(--secondary))",
        accent: "0 0 10px hsl(var(--accent)), 0 0 20px hsl(var(--accent))",
      },
      backgroundImage: {
        "gradient-space": "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary)))",
      },
    },
  },
  plugins: [],
};
