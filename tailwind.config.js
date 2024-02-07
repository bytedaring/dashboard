/** @type {import('tailwindcss').Config } */
const config = {
    content: ["./src/**/*.{html,svelte,ts,js}"],
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"]
        // themes: ["light", "dark", "cupcake", "synthwave", "retro", "aqua", "valentine", "cyberpunk"]
    }
}
export default config;
