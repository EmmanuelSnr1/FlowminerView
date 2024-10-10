module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#000808",
        gray: "#707070",
        "darker-teal": "#142020",
        "dark-teal": "#0a5353",
        teal: "#217575",
        "lighter-teal": "#98fcfc",
        slate: "#b6c9c9",
        "light-gray": "#e7e8e8",
        green: "#0ee231",
        "pink-red": "#ff67A9",
        lightYellow: "#f5fc98",
        white: "#ffffff",
        primary: {
          "50": "#eff6ff",
          "100": "#dbeafe",
          "200": "#bfdbfe",
          "300": "#93c5fd",
          "400": "#60a5fa",
          "500": "#3b82f6",
          "600": "#2563eb",
          "700": "#1d4ed8",
          "800": "#1e40af",
          "900": "#1e3a8a",
          "950": "#172554",
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/forms'), // Optional for form styling
  ],
};
