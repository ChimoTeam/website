import catppuccin from "@catppuccin/tailwindcss"

/** @type {import('tailwindcss').Config} */
export default {
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
  plugins: [catppuccin({
    prefix: "ctp",
    defaultFlavour: "macchiato"
  })],
}

