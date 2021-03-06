import { createGlobalStyle } from "styled-components"

const PrintStyle = createGlobalStyle`
// cf. HTML5 Boilerplate v7.1.0
@media print {
  *,
  *:before,
  *:after {
    background: #fff !important;
    color: #000 !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a[href]:after {
    content: " (" attr(href) ")";
  }

  abbr[title]:after {
    content: " (" attr(title) ")";
  }

  a[href^="#"]:after,
  a[href^="javascript:"]:after {
    content: "";
  }

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }

  @page {
    margin: 1cm;
  }

  html {
    font-size: 11pt;
  }

  #find-me,
  #cv {
    display: none;
  }

  img {
    image-resolution: from-image;
  }
`

export default PrintStyle
