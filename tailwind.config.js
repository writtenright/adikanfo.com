module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cocoa: '#4B2E2A',
        farmgreen: '#2F6A3A',
        cream: '#F5EFE6',
        gold: '#C49A6C'
      },
      fontFamily: {
        heading: ['Merriweather', 'serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [],
}
