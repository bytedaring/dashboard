/** @type {import('tailwindcss').Config } */
const config = {
    content: ["./src/**/*.{html,svelte,ts,js}"],
    plugins: [require("daisyui")],
    daisyui: {
        themes: false,
        // themes: ["light", "dark", "cupcake", "synthwave", "retro", "aqua", "valentine", "cyberpunk"]
    }
}
export default config;
