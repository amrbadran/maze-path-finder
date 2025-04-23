const config = {
  plugins: {
    "@tailwindcss/postcss": {
      tailwindcss: {
        theme: {
          extend: {
            colors: {
              primary: "#1D4ED8",
              secondary: "#9333EA",
              "brand-green": "#00ff99",
              "dark-magenta": "#80063d",
            },
          },
        },
      },
      autoprefixer: {},
    },
  },
};

export default config;
