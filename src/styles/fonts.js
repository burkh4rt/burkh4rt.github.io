import {createGlobalStyle} from 'styled-components'

// import GaramondPremrProCaptWoff2 from "../fonts/GaramondPremrPro-Capt.woff2"
// import GaramondPremrProCaptWoff from "../fonts/GaramondPremrPro-Capt.woff"
// import GaramondPremrProCaptOtf from "../fonts/GaramondPremrPro-Capt.otf"

// import GaramondPremrProItCaptWoff2 from "../fonts/GaramondPremrPro-ItCapt.woff2"
// import GaramondPremrProItCaptWoff from "../fonts/GaramondPremrPro-ItCapt.woff"
// import GaramondPremrProItCaptOtf from "../fonts/GaramondPremrPro-ItCapt.otf"

// import GaramondPremrProMedCaptWoff2 from "../fonts/GaramondPremrPro-MedCapt.woff2"
// import GaramondPremrProMedCaptWoff from "../fonts/GaramondPremrPro-MedCapt.woff"
// import GaramondPremrProMedCaptOtf from "../fonts/GaramondPremrPro-MedCapt.otf"

import GillSansNovaBookWoff2 from '../fonts/GillSansNova-Book.woff2'
import GillSansNovaBookWoff from '../fonts/GillSansNova-Book.woff'
import GillSansNovaBookOtf from '../fonts/GillSansNova-Book.otf'

import GillSansNovaBookItWoff2 from '../fonts/GillSansNova-BookItalic.woff2'
import GillSansNovaBookItWoff from '../fonts/GillSansNova-BookItalic.woff'
import GillSansNovaBookItOtf from '../fonts/GillSansNova-BookItalic.otf'

const Fonts = createGlobalStyle`
    @font-face {
        font-family: "Gill Sans Nova";
        src: url(${GillSansNovaBookWoff2}) format("woff2"),
             url(${GillSansNovaBookWoff}) format("woff"),
             url(${GillSansNovaBookOtf}) format("opentype"),
             url("https://use.typekit.net/af/078c93/00000000000000003b9b1f81/27/l") format("woff2"),
             url("https://use.typekit.net/af/078c93/00000000000000003b9b1f81/27/d") format("woff");
        font-style: normal;
        font-weight: 400;
        font-feature-settings: "kern" 1, "onum" 1;
        /* unicode-range: U+000-5FF;  Latin glyphs */
        font-display: block;
    }
    @font-face {
      font-family: "Gill Sans Nova";
          src: url(${GillSansNovaBookItWoff2}) format("woff2"),
               url(${GillSansNovaBookItWoff}) format("woff"),
               url(${GillSansNovaBookItOtf}) format("opentype"),
               url("https://use.typekit.net/af/7c22c1/00000000000000003b9b1f82/27/l") format("woff2"),
               url("https://use.typekit.net/af/7c22c1/00000000000000003b9b1f82/27/d") format("woff");
          font-style: italic;
          font-weight: 400;
          font-feature-settings: "kern" 1, "onum" 1;
          /* unicode-range: U+000-5FF;  Latin glyphs */
          font-display: block;
    }
`

export default Fonts

// @font-face {
//     font-family: "Garamond Premier Pro Caption";
//     src: url(${GaramondPremrProCaptWoff2}) format("woff2"),
//          url(${GaramondPremrProCaptWoff}) format("woff"),
//          url(${GaramondPremrProCaptOtf}) format("opentype")
//          url("https://use.typekit.net/af/624e8d/00000000000000003b9ade2b/27/l") format("woff2"),
//          url("https://use.typekit.net/af/624e8d/00000000000000003b9ade2b/27/d") format("woff");
//     font-style: normal;
//     font-weight: 400;
//     font-feature-settings: "kern" 1, "onum" 1;
//     /* unicode-range: U+000-5FF, U+261C;  Latin glyphs */
//     font-display: block;
// }
// @font-face {
//     font-family: "Garamond Premier Pro Caption";
//     src: url(${GaramondPremrProItCaptOtf}) format("opentype"),
//          url(${GaramondPremrProItCaptWoff2}) format("woff2"),
//          url(${GaramondPremrProItCaptWoff}) format("woff"),
//          url("https://use.typekit.net/af/149dc4/00000000000000003b9ade2a/27/l") format("woff2"),
//          url("https://use.typekit.net/af/149dc4/00000000000000003b9ade2a/27/d") format("woff");
//     font-style: italic;
//     font-weight: 400;
//     font-feature-settings: "kern" 1, "onum" 1;
//     font-display: block;
// }
// @font-face {
//   font-family: "Garamond Premier Pro Caption";
//       src: url(${GaramondPremrProMedCaptWoff2}) format("woff2"),
//            url(${GaramondPremrProMedCaptWoff}) format("woff"),
//            url(${GaramondPremrProMedCaptOtf}) format("opentype"),
//            url("https://use.typekit.net/af/ea8559/00000000000000003b9ade2d/27/l") format("woff2"),
//            url("https://use.typekit.net/af/ea8559/00000000000000003b9ade2d/27/d") format("woff");
//       font-style: normal;
//       font-weight: 500;
//       font-feature-settings: "kern" 1, "onum" 1;
//       /* unicode-range: U+000-5FF, U+261C;  Latin glyphs */
//       font-display: block;
// }
