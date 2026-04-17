import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a", // Azul muy oscuro (Casi negro)
        surface: "#1e293b",    // Gris azulado para tarjetas
        primary: "#3b82f6",    // Azul brillante para botones
        secondary: "#64748b",  // Textos secundarios
      },
    },
  },
  plugins: [],
};
export default config;
