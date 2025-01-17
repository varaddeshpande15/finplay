/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        breathing: {
          '0%, 100%': { backgroundPosition: 'center 0px' },
          '50%': { backgroundPosition: 'center 0.1px' },
        },
      },
      animation: {
        breathing: 'breathing 10s ease-in-out infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        game: ["'Press Start 2P'", "cursive"], // For retro game-style text
        fun: ["'Bangers'", "cursive"], // For headings and playful elements
        modern: ["'Fredoka One'", "cursive"], // For clean, rounded game text
        sans: ["'DM Sans'", "sans-serif"], // For modern, elegant text
        inter: ["'Inter'", "sans-serif"], // For highly readable text
      },      
    },
  },
  plugins: [],
};
