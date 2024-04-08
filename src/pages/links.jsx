import React from 'react'

import {
  Box,
  Breadcrumbs,
  Link,
  Octicon,
  Pagehead,
  Text,
  SubNav,
  ThemeProvider,
  BaseStyles,
  SplitPageLayout,
} from '@primer/react'

import {LinkExternalIcon, LocationIcon} from '@primer/octicons-react'

import {customTheme} from '../styles/theme'
import Fonts from '../styles/fonts'

export const Head = () => (
  <>
    <html lang="en" />
    <title>publications</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/links/" />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <Fonts />
        <ThemeProvider theme={customTheme}>
          <BaseStyles>
            <SplitPageLayout>
              <SplitPageLayout.Header>
                <Breadcrumbs>
                  <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
                  <Breadcrumbs.Item href="#" selected>
                    links
                  </Breadcrumbs.Item>
                </Breadcrumbs>
              </SplitPageLayout.Header>

              <SplitPageLayout.Content>
                <Pagehead as="h3">Online Presence</Pagehead>

                <Box
                  style={{
                    display: `flex`,
                    flexDirection: `row`,
                    flexWrap: `wrap`,
                    justifyContent: `space-evenly`,
                    gap: `2rem`,
                    maxWidth: `calc(max(50%,400px))`,
                    marginLeft: `auto`,
                    marginRight: `auto`,
                  }}
                >
                  <Link href="https://www.linkedin.com/in/burkh4rt/" target="_blank" style={{whiteSpace: `nowrap`}}>
                    LinkedIn <LinkExternalIcon />
                  </Link>
                  <Link href="https://github.com/burkh4rt/" target="_blank" style={{whiteSpace: `nowrap`}}>
                    Github <LinkExternalIcon />
                  </Link>
                  <Link
                    href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
                    target="_blank"
                    style={{whiteSpace: `nowrap`}}
                  >
                    Google Scholar <LinkExternalIcon />
                  </Link>
                  <Link href="https://orcid.org/0000-0002-2772-5840" target="_blank" style={{whiteSpace: `nowrap`}}>
                    OrcID <LinkExternalIcon />
                  </Link>
                  <Link
                    href="https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691"
                    target="_blank"
                    style={{whiteSpace: `nowrap`}}
                  >
                    MathSciNet <LinkExternalIcon />
                  </Link>
                  <Link
                    href="https://zbmath.org/authors/burkhart.michael-c"
                    target="_blank"
                    style={{whiteSpace: `nowrap`}}
                  >
                    zbMath <LinkExternalIcon />
                  </Link>
                  <Link
                    href="https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430"
                    target="_blank"
                    style={{whiteSpace: `nowrap`}}
                  >
                    MGP <LinkExternalIcon />
                  </Link>
                  <Link href="https://arxiv.org/a/burkhart_m_2.html" target="_blank" style={{whiteSpace: `nowrap`}}>
                    arXiv <LinkExternalIcon />
                  </Link>

                  <Link
                    href="https://www.inaturalist.org/people/burkh4rt"
                    target="_blank"
                    style={{whiteSpace: `nowrap`}}
                  >
                    iNaturalist <LinkExternalIcon />
                  </Link>
                  <Link href="https://ebird.org/profile/NDYwNzg1MA/" target="_blank" style={{whiteSpace: `nowrap`}}>
                    eBird <LinkExternalIcon />
                  </Link>
                  <Link href="https://twitter.com/burkh4rt" target="_blank" style={{whiteSpace: `nowrap`}}>
                    X (Twitter) <LinkExternalIcon />
                  </Link>
                  <Link href="https://burkh4rt.tumblr.com" target="_blank" style={{whiteSpace: `nowrap`}}>
                    Tumblr <LinkExternalIcon />
                  </Link>
                  <Link href="https://500px.com/p/burkh4rt" target="_blank" style={{whiteSpace: `nowrap`}}>
                    500px <LinkExternalIcon />
                  </Link>
                  <Link href="https://www.instagram.com/burkh4rt/" target="_blank" style={{whiteSpace: `nowrap`}}>
                    Instagram <LinkExternalIcon />
                  </Link>
                  <Link
                    href="https://www.instagram.com/felixity_the_cat/"
                    target="_blank"
                    style={{whiteSpace: `nowrap`}}
                  >
                    Felixity <LinkExternalIcon />
                  </Link>
                </Box>
                <Box height={10} />

                <SubNav aria-label="Main" style={{flexDirection: `row`, justifyContent: `flex-end`}}>
                  <SubNav.Links>
                    <SubNav.Link href="/" rel="noopener noreferrer">
                      home
                    </SubNav.Link>
                  </SubNav.Links>
                </SubNav>
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
