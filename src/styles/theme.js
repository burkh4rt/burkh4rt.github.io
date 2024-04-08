import { theme } from "@primer/react"
import deepmerge from "deepmerge"

export const customTheme = deepmerge(theme, {
  fonts: {
    normal: "Gill Sans Nova, Gill Sans, Helventica, Arial, sans-serif",
  },
})
