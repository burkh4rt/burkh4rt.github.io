import { createGlobalStyle } from "styled-components";

import GillSansNovaBookWoff2 from "../fonts/GillSansNova-Book.woff2";
import GillSansNovaBookWoff from "../fonts/GillSansNova-Book.woff";
import GillSansNovaBookOtf from "../fonts/GillSansNova-Book.otf";

import GillSansNovaBookItWoff2 from "../fonts/GillSansNova-BookItalic.woff2";
import GillSansNovaBookItWoff from "../fonts/GillSansNova-BookItalic.woff";
import GillSansNovaBookItOtf from "../fonts/GillSansNova-BookItalic.otf";

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: "Gill Sans Nova";
        src: url(${GillSansNovaBookOtf}) format("opentype"),
             url(${GillSansNovaBookWoff2}) format("woff2"),
             url(${GillSansNovaBookWoff}) format("woff"),
             url("https://use.typekit.net/af/078c93/00000000000000003b9b1f81/27/l") format("woff2"),
             url("https://use.typekit.net/af/078c93/00000000000000003b9b1f81/27/d") format("woff");
        font-style: normal;
        font-weight: 400;
        font-feature-settings: "calt" 1, "kern" 1, "liga" 1, "onum" 1, "salt" 1;
        unicode-range: U+000-5FF, U+0148;  /* Latin glyphs */
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
          font-feature-settings: "calt" 1, "kern" 1, "liga" 1, "onum" 1, "salt" 1;
          /* unicode-range: U+000-5FF;  Latin glyphs */
          font-display: block;
    }
`;
