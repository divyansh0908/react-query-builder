/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        "theme-blue": "#5C61F0",
        "theme-blue-light": "#A5B4FC",
        "modal-background": "#1D2025",
        "group-background": "#282B30",
        "button-background": "#4F46E5",
        "bg-gray":"#6D7175",
        "dropdown-bg":"#404348",
        "background-cross":"#4338CA"
      },
        
    }
  },
  plugins: [],
}
