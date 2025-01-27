import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img-bg-hero': "url('../assets/bg-green.png')",
    },
    extend: {
      colors: {
        'primary-white': '#f7f7f7',
        'primary-blue': '#106EB0',
        'primary-orange': '#EC7000',
        'primary-gray': "#33303E",
        'second-gray': "#4E4B59",
        'gray-phone': '#F4F4F4',
        'txt-gray': '#7A7786',
        'primary-green': '#309700',
        'second-green': "#13D518",
        'opacity-gray': 'rgba(100, 80, 57, 0.1)'
      }
    },
  },
  plugins: [],
} satisfies Config;
