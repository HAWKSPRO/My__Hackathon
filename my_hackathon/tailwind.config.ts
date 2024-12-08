import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        main_image:"url('/main_image.svg')",
        main_image_mobile:"url('/main_image_mobile.svg')",
        bg_image_sec:"url('/bg_image_sec.svg')",
      },
      colors: {
        header_color:"#252B42",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
