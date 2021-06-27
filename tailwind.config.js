module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                main: {
                    blue: "#20438d",
                    red: "#D7353C",
                    gray: "#f8f8f8",
                    light: "#f9f9f9",
                    white: "#f1f3f6",
                    text: " #777777",
                    btn: "#343538",
                },
            },
            fontFamily: {
                poppins: "Poppins, sans-serif",
            },
            backgroundImage: (theme) => ({
                "about-bg": "url('/images/bg.png')",
            }),
            container: {
                center: true,
                padding: "1rem",
            },
            cursor: {
                "zoom-in": "zoom-in",
            },
            height: {
                98: "29rem",
                100: "35rem",
            },
            backgroundColor: ["checked"],
            borderColor: ["checked"],
        },
    },
    variants: {
        extend: { backgroundColor: ["active"] },
    },
    plugins: [require("@tailwindcss/custom-forms")],
}
