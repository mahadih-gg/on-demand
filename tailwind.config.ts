import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#04C8B1",
          50: "#EFFEFB",
          100: "#C7FFF4",
          200: "#90FFE9",
          300: "#51F7DC",
          400: "#1DE4CA",
          500: "#04C8B1",
          600: "#009688",
          700: "#058075",
          800: "#0A655F",
          900: "#0D544F",
        },
        light: "#EAFDF9",
        dark: "#344B46",
        gray: "#97B1AB"
      },
      spacing: {
        section: '5rem 0',
        heading: '0 0 2rem 0',
      }
    },

    container: {
      center: true,
      padding: '2rem',
    },

  },
  plugins: [],
};
export default config;
