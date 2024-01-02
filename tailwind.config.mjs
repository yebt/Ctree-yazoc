/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        woodsmoke: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#161616", // 10% darker
        },
        romance: {
          50: "#fdfdfc", // 10% lighter
          100: "#f2f2ec",
          200: "#e2e1d5",
          300: "#c9c7b0",
          400: "#aba885",
          500: "#918d66",
          600: "#787551",
          700: "#626042",
          800: "#535239",
          900: "#474633",
          950: "#2f2f22",
        },
        
      },
      backgroundImage: {
        darkpattern: "linear-gradient(#1c1c1c 2px, transparent 2px), linear-gradient(90deg, #1c1c1c 2px, transparent 2px), linear-gradient(#1c1c1c 1px, transparent 1px), linear-gradient(90deg, #1c1c1c 1px, #161616 1px)",
        lightpattern: "linear-gradient(#f5f5f5 2px, transparent 2px), linear-gradient(90deg, #f5f5f5 2px, transparent 2px), linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, #FDFDFC 1px);",
      },
      backgroundPosition: {
        centeroffset: "-2px -2px, -2px -2px, -1px -1px, -1px -1px",

      },
      backgroundSize: {
        patternsize: "50px 50px, 50px 50px, 10px 10px, 10px 10px"
      }
    },
  },
  plugins: [],
};
