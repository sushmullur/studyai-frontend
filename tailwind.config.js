/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing: {
        '10vw': '10vw',
        '20vw': '20vw',
        '25vw': '25vw',
        '30vw': '30vw',
        '40vw': '40vw',
        '50vw': '50vw',
        '60vw': '60vw',
        '70vw': '70vw',
      },
      colors: {
        'gray-750': '#283242',
        'beige': '#fdf5c9',
        'cream': '#fdf5c9',
        'light-brown': '#be9b7b',
        'brown': '#6b3e26'
      }
    },
  },
  plugins: [],
}
