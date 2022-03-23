const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: 'jit',
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            screens:{
                md: '920px'
            },
            colors: {
                plum: "#776d8a",
                gold: "#d3c09a",
                lightblue: "#dbe3e5",
                lightpink: "#f3e6e3",
            },
            fontFamily: {
                serif: ['Migra', ...defaultTheme.fontFamily.serif]
            },
            boxShadow: {
                'offset-black': '8px 8px black'
            }
        },
    },
    plugins: [],
};
