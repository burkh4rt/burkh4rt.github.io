const React = require("react")

import GaramondPremrProItCaptOtf from "./src/fonts/GaramondPremrPro-ItCapt.otf"
import GaramondPremrProMedCaptWoff2 from "./src/fonts/GaramondPremrPro-MedCapt.woff2"
import GillSansNovaBookWoff2 from "./src/fonts/GillSansNova-Book.woff2"
import GillSansNovaBookItWoff2 from "./src/fonts/GillSansNova-BookItalic.woff2"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href={GaramondPremrProItCaptOtf}
      as="font"
      type="font/otf"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href={GaramondPremrProMedCaptWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href={GillSansNovaBookWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
    <link
      rel="preload"
      href={GillSansNovaBookItWoff2}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
    />,
  ])
}
