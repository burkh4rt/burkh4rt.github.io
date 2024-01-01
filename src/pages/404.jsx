import React from "react"
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

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael's 404</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <GlobalReset />
        <Fonts />
        <Theme>
          <DeckThin>
            <HeaderCard>
              <h1>Michael's 404</h1>
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
