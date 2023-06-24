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
    },
    colors:{
    },
    fontSize:{
      'homepageItems':'14px',
      'detailsPage':'16px',
      'lg':'23px',
    },
    fontWeight:{
      'low':'300',
      'mid':'600',
      'high':'800',
    },
    maxWidth:{
      'normal':'500px',
      'fix':'300px',
    }
  },
  plugins: [],
}
