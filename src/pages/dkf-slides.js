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
        <meta
          name="description"
          content="Slides from the Ph.D. defense of 'A Discriminative Approach to Bayesian Filtering with Applications to Human Neural Decoding' presented in the Division of Applied Mathematics at Brown University in Providence RI USA on 23 May 2018"
        />
        <meta
          name="keywords"
          content="Michael Burkhart,Michael C. Burkhart,Ph.D.,Brown University,Applied Mathematics,Statistics,Bayesian Filtering,neural decoding,Discriminative Kalman Filter,machine learning"
        />
      </Helmet>

      <body>
        <object
          style={{ position: "absolute", top: "0", left: "0", margin: "0" }}
          width="100%"
          height="100%"
          data={DKFslides}
          type="application/pdf"
        />
      </body>
    </>
  )
}
