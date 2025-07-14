// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // <- esto es lo importante
    content: [
      './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}', // ajusta si tienes otras carpetas
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  