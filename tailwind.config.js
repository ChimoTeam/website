/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{svelte,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["'Excalifont'"],
        "mono": ["'ComicMono'"]
      }
    },
  },
  plugins: [require("@catppuccin/tailwindcss")({
    prefix: "ctp",
    defaultFlavour: "macchiato"
  })],
}

