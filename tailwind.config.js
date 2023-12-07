/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ["Anuphan", "Arial", "sans-serif"],
      serif: ["Lora", "Times New Roman", "serif"],
      cursive: ["Flavors", "cursive"],
      mono: ["JetBrains Mono", "Fira Code", "Consolas", "ui-monospace"],
      title: ["Playpen Sans", "sans-serif"],
      subtitle: ["Playpen Sans", "sans-serif"],
      describe: ["Roboto", "sans-serif"],
    },
    extend: {
      fontSize: {
        base: "20px",
      },
    },
  },
};
