/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#171717",
        panel: "#1d1d1d",
        line: "#262626",
        text: "#f5f5f4",
        muted: "#909090",
        soft: "#bcbcbc",
        pill: "#2b2b2b"
      },
      fontFamily: {
        sans: ["'Archivo'", "'Helvetica Neue'", "Arial", "sans-serif"]
      },
      borderRadius: {
        card: "1.25rem",
        pill: "999px"
      },
      boxShadow: {
        halo: "0 0 0 1px rgba(255,255,255,0.04)"
      },
      letterSpacing: {
        tightish: "-0.04em"
      }
    }
  },
  plugins: []
};
