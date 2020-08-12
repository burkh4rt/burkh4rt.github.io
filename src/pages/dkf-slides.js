import React from "react"
import { Helmet } from "react-helmet"

import DKFslides from "../docs/dkf-slides.pdf"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Discriminative Kalman Filter Slides</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
      </Helmet>

      <body>
        <embed
          style={{ position: "absolute", top: "0", left: "0", margin: "0" }}
          width="100%"
          height="100%"
          src={DKFslides}
          type="application/pdf"
        />
      </body>
    </>
  )
}
