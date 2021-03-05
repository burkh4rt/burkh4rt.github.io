import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

import Theme from "../components/component_theme"
import GlobalReset from "../components/component_normalize"
import Fonts from "../components/fonts"
import PrintStyle from "../components/print"

import {
  DeckThin,
  Card,
  HeaderCard,
  CardTitle,
  CardContent,
} from "../components/layouts"

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Michael's 404</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
      </Helmet>

      <body>
        <GlobalReset />
        <Fonts />
        <Theme>
          <DeckThin>
            <HeaderCard>
              <h2>Menagerie</h2>
              <h1>Michael C. Burkhart</h1>
            </HeaderCard>

            <Card>
              <CardTitle>404</CardTitle>
              <CardContent>
                You appear to be lost. This happens from time to time. Shall we
                head <Link to="/">home</Link>?
              </CardContent>
            </Card>
          </DeckThin>
        </Theme>
        <PrintStyle />
      </body>
    </>
  )
}
