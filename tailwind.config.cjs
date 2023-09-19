module.exports = {
  content: ['./src/routes/**/*.{svelte,js,ts,html}'],
  daisyui: {
    themes: ["light"],
    logs: false
  },
  plugins: [require("daisyui")]
}