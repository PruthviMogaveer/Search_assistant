/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-5": "#fff",
        "color-2": "#03012c",
        darkgray: "#9ca3af",
        color: "#26a96c",
        dimgray: "#49485b",
        "color-6": "#909090",
        ghostwhite: "rgba(249, 248, 254, 0.8)",
        whitesmoke: {
          "100": "#f9fafb",
          "200": "#f8f8f8",
          "300": "#f6f6f6",
          "400": "#eee",
          "500": "rgba(247, 247, 247, 0.7)",
        },
        gainsboro: {
          "100": "#dedede",
          "200": "#dbdbdb",
          "300": "#d9d9d9",
          "400": "rgba(222, 222, 222, 0.09)",
          "500": "#e6e6e6",
        },
        "color-3": "#3b6064",
        darkslategray: {
          "100": "#374151",
          "200": "rgba(46, 62, 92, 0.8)",
        },
        gray: {
          "100": "rgba(255, 255, 255, 0.65)",
          "200": "rgba(255, 255, 255, 0.8)",
        },
        "main-color-1": "#1e1f4b",
        mediumseagreen: "#40c285",
      },
      spacing: {},
      fontFamily: {
        "heading-text-inter-semi-bold-24": "Inter",
        "segoe-ui-symbol": "'Segoe UI Symbol'",
        "body-text-plus-jakarta-sans-regular-16": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "51xl": "70px",
        xl: "20px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      xl: "20px",
      "45xl": "64px",
      "19xl": "38px",
      "32xl": "51px",
      xs: "12px",
      lgi: "19px",
      "7xl": "26px",
      "29xl": "48px",
      "10xl": "29px",
      "9xl": "28px",
      "3xl": "22px",
      "37xl": "56px",
      "26xl": "45px",
      "15xl": "34px",
      inherit: "inherit",
    },
    screens: {
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      mq1275: {
        raw: "screen and (max-width: 1275px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1100: {
        raw: "screen and (max-width: 1100px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
