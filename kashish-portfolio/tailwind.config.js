/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F5F0EB',
          secondary: '#EDE6DD',
          card: 'rgba(255,250,245,0.6)',
          dark: '#2C2522'
        },
        text: {
          primary: '#2C2522',
          secondary: '#5a4e44',
          muted: '#9B8E82',
          light: '#F5F0EB'
        },
        accent: {
          bronze: '#8B7355',
          sage: '#8FA68A',
          warm: '#C4A882'
        },
        border: {
          subtle: 'rgba(180,160,140,0.15)'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        card: '0 8px 32px rgba(120,100,80,0.08)',
        hover: '0 20px 60px rgba(120,100,80,0.12)'
      }
    },
  },
  plugins: [],
}
