/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "twttr-blue": "#9ae4e8",
      },
      backgroundImage: {
        "twttr-clouds": "url('/images/bg.gif')",
        "twttr-arr": "url('/images/arr2.gif')",
      },
    },
  },
  plugins: [],
};
