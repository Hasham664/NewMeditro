/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#023E8A",
        "custom-teal": "#4CB6B6",
        "sky-blue": "#FFFFFF",
        "dark-blue": "#F8FDFF",
        "testimonial-1": "#EBF8FF",
        "testimonial-2": "#FDFEFF",
        "border-1": "#0069AB",
        "border-2": "#4CB6B6",
      },
      screens: {
        tablet: "840px",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
      variants: {
        extend: {
          animation: ["hover", "focus"],
        },
      },
    },
  },
  plugins: [],
};
