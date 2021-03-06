import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  colors: {
    black: `#1b1f23`,
    white: `#fff`,
    red: `#ed1c24`,
    brown: `#4e3629`,
    gold: `#ffc72c`,
    grey: `#98a4ae`,
    skyblue: `#59cbe8`,
    emerald: `#00b398`,
    navy: `#003c71`,
    taupe: `#b7b09c`,
    green: `#046a38`,
  },
  spaces: {
    spacer000: `0.133rem`,
    spacer00: `0.178rem`,
    spacer0: `0.237rem`,
    spacer1: `0.317rem`,
    spacer2: `0.422rem`,
    spacer3: `0.563rem`,
    spacer4: `0.75rem`,
    spacer5: `1rem`,
    spacer6: `1.333rem`,
    spacer7: `1.777rem`,
    spacer8: `2.37rem`,
    spacer9: `3.16rem`,
  },
  breakpoints: {
    widthSm: `544px`,
    widthMd: `768px`,
    widthLg: `1012px`,
    widthXl: `1280px`,
  },
  fontstacks: {
    garamondStack: `"Garamond Premier Pro Caption", "Adobe Garamond Premier Pro", Garamond, "Apple Garamond",
      "ITC Garamond Narrow", Baskerville, "Baskerville Old Face", "Palatino Linotype", Palatino, "Hoefler Text", "Times New Roman", Times, serif`,
    gillSansStack: `"Gill Sans Nova", "Gill Sans", "Gill Sans MT", Frutiger, "Frutiger Linotype", Univers,
      Calibri, "P22 Underground", "Futura", Helvetica, Arial, sans-serif`,
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
