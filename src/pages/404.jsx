import React from 'react'

import {Breadcrumbs, Link, Octicon, Pagehead, Text, ThemeProvider, BaseStyles, SplitPageLayout} from '@primer/react'

import {LocationIcon} from '@primer/octicons-react'

import Fonts from '../styles/fonts'
import {customTheme} from '../styles/theme'

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael's 404</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/404" />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <Fonts />
        <ThemeProvider theme={customTheme} dayScheme="light" nightScheme="dark_dimmed">
          <BaseStyles>
            <SplitPageLayout>
              <SplitPageLayout.Header>
                <Breadcrumbs>
                  <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
                  <Breadcrumbs.Item href="#" selected>
                    404
                  </Breadcrumbs.Item>
                </Breadcrumbs>
              </SplitPageLayout.Header>

              <SplitPageLayout.Content>
                <Pagehead as="h3">Michael's 404</Pagehead>
                <Text>
                  You appear to be lost. This happens from time to time. Shall we head <Link href="/">home</Link>?
                </Text>
              </SplitPageLayout.Content>

              <SplitPageLayout.Footer padding="condensed">
                <Text as="p" align="end" style={{padding: 0, margin: 0, textAlign: `right`}}>
                  <Octicon icon={LocationIcon} /> Plainfield, Indiana &copy; 2024
                </Text>
              </SplitPageLayout.Footer>
            </SplitPageLayout>
          </BaseStyles>
        </ThemeProvider>
      </body>
    </>
  )
}
