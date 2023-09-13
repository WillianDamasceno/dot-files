/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {

        },
        container: {
            
        }
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/aspect-ratio"),
      require("@tailwindcss/container-queries"),
      require("daisyui"),
    ],
    daisyui: {
      themes: ["light", "dark"],
      darkTheme: "dark",
    },
  };
  