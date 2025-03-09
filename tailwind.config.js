/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
    "./components/**/*.{md,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,jsx,ts,tsx,md,mdx}",
  ],

  theme: {
    extend: {
      fontSize: {
        tiny: ["0.625rem", { lineHeight: "1rem" }],
        caption: ["12px", { lineHeight: "16px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "20px", fontWeight: "400" }],
        "heading-3": ["17px", { lineHeight: "20px", fontWeight: "600" }],
        "heading-2": ["22px", { lineHeight: "24px", fontWeight: "600" }],
        "heading-1": ["30px", { lineHeight: "36px", fontWeight: "500" }],
      },
      colors: {
        body: "var(--tw-body-text, #333)", // CSS variable fallback
      },
    },
  },
  // plugins: [require("@tailwindcss/typography")],
  // safelist: [
  //   "text-body",
  //   "text-caption",
  //   "text-heading-1",
  //   "text-heading-2",
  //   "text-heading-3",
  // ],
  // typography: {
  //   DEFAULT: {
  //     css: {
  //       h1: {
  //         fontSize: "30px",
  //         lineHeight: "36px",
  //         fontWeight: "500",
  //       },
  //       h2: {
  //         fontSize: "22px",
  //         lineHeight: "28px",
  //         fontWeight: "600",
  //       },
  //       h3: {
  //         fontSize: "17px",
  //         lineHeight: "24px",
  //         fontWeight: "600",
  //       },
  //       p: {
  //         fontSize: "17px",
  //         lineHeight: "24px",
  //         fontWeight: "400",
  //       },
  //       small: {
  //         fontSize: "12px",
  //         lineHeight: "16px",
  //         fontWeight: "400",
  //       },
  //     },
  //   },
  // },
  // plugins: [],
  // important: "#__next",
};
