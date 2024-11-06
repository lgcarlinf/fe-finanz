export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1C768F",
          dark: "#032539",
        },
        text: {
          primary: "#1F2937",
          secondary: "#6B7280",
          link: "#9CA3AF",
        },
      },
      spacing: {
        buttonPadding: "0.75rem",
      },
      width: {
        "login-form": "60%",
        "form-content": "100%",
        "button-large": "65%",
        "button-medium": "45%",
        "button-small": "35%",
        "button-xs": "10%",
      },
      fontSize: {
        heading: "1.5rem",
        body: "0.875rem",
      },
    },
  },
  plugins: [],
};
