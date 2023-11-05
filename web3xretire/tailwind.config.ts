import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  daisyui: {
    themes: [{
      mytheme: {
        "primary": "#F5791F",
        "secondary": "#42B36D",
        "accent": "#6D42B3",
        "neutral": "#3d4451",
        "base-100": "#1E1E1E",
      },
    },],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
export default config;
