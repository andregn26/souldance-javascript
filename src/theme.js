// color design tokens export
export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#e0e0e0",
    200: "#c2c2c2",
    300: "#a3a3a3",
    400: "#858585",
    500: "#666666",
    600: "#525252",
    700: "#3d3d3d",
    800: "#292929",
    900: "#141414",
    1000: "#000000", // manually adjusted
  },

  primary: {
    50: "#F7F1F8",
    100: "#f8e4fe",
    200: "#f1c9fc",
    300: "#eaadfb",
    400: "#e392f9",
    500: "#dc77f8",
    600: "#b05fc6",
    700: "#844795",
    800: "#583063",
    900: "#2c1832",
    1000: "#170E1B",
  },

  secondary: {
    // yellow
    50: "#f0f0f0", // manually adjusted
    100: "#f3f9f1",
    200: "#e7f4e4",
    300: "#dceed6",
    400: "#d0e9c9",
    500: "#c4e3bb",
    600: "#9db696",
    700: "#768870",
    800: "#4e5b4b",
    900: "#272d25",
  },
}

// function that reverses the color palette
function reverseTokens(tokensDark) {
  const reversedTokens = {}
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val)
    const values = Object.values(val)
    const length = keys.length
    const reversedObj = {}
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1]
    }
    reversedTokens[key] = reversedObj
  })
  return reversedTokens
}
export const tokensLight = reverseTokens(tokensDark)

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[500],
              light: tokensDark.primary[800],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[1000],
            },
            card: {
              default: tokensDark.primary[900],
            },
            text: {
              primary: tokensDark.grey[10],
              secondary: tokensDark.grey[10],
              selectedText: tokensDark.primary[300],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: tokensDark.primary[700],
              light: tokensDark.grey[100],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensDark.secondary[600],
              light: tokensDark.secondary[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              ...tokensLight.primary,
              default: tokensDark.primary[50],
            },
            card: {
              default: tokensDark.primary[50],
            },
            text: {
              primary: tokensDark.primary[800],
              secondary: tokensDark.grey[10],
              selectedText: tokensDark.primary[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      htmlFontSize: 10,
      color: "red",
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "3.24rem",
        "@media (min-width:400px)": {
          fontSize: "5.53rem",
        },
        "@media (min-width:800px)": {
          fontSize: "7.05rem",
        },
        "@media (min-width:1500px)": {
          fontSize: "10.1rem",
        },
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2.88rem",
        "@media (min-width:400px)": {
          fontSize: "3.4rem",
        },
        "@media (min-width:800px)": {
          fontSize: "5.49rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "7.58rem",
        },
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2.56rem",
        "@media (min-width:400px)": {
          fontSize: "2.91rem",
        },
        "@media (min-width:800px)": {
          fontSize: "4.3rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "5.68rem",
        },
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2.28rem",
        "@media (min-width:400px)": {
          fontSize: "2.5rem",
        },
        "@media (min-width:800px)": {
          fontSize: "3.38rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "4.26rem",
        },
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "2.02rem",
        "@media (min-width:400px)": {
          fontSize: "2.16rem",
        },
        "@media (min-width:800px)": {
          fontSize: "2.68rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "3.2rem",
        },
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1.8rem",
        "@media (min-width:400px)": {
          fontSize: "1.87rem",
        },
        "@media (min-width:800px)": {
          fontSize: "2.13rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "2.4rem",
        },
      },
      p: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: "1.6rem",
        "@media (min-width:400px)": {
          fontSize: "1.62rem",
        },
        "@media (min-width:800px)": {
          fontSize: "1.71rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1.8rem",
        },
      },
    },
  }
}
