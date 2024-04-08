import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  Box,
  Link,
  Octicon,
  Pagehead,
  Text,
  Timeline,
  Heading,
  SubNav,
  ThemeProvider,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react"

import {
  MortarBoardIcon,
  GitCommitIcon,
  LocationIcon,
} from "@primer/octicons-react"

import { customTheme } from "../styles/theme"
import LinkedData from "../data/linked"

import Msvg from "../logos/m.svg"
import Fonts from "../styles/fonts"

import GithubLogo from "../logos/github-logo.svg"
import INaturalistLogo from "../logos/inaturalist-logo.svg"
import LinkedInLogo from "../logos/linkedin-logo.svg"
import GoogleScholarLogo from "../logos/google-scholar.svg"
import OrcIDLogo from "../logos/orcid-logo.svg"

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael C. Burkhart's website</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <meta
      name="description"
      content="Michael Burkhart's homepage. Snippets from work and life, with links."
    />
    <meta
      name="keywords"
      content="Michael Burkhart, Michael C. Burkhart, Ph.D., Brown University, Applied Mathematics, \
      Bayesian filtering, neural decoding, discriminative Kalman filter, University of Cambridge"
    />
    <meta property="og:title" content="Michael Burkhart's website" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={Msvg} />
    <meta property="og:url" content="https://burkh4rt.github.io" />
    <meta
      property="og:description"
      content="Michael Burkhart's homepage. Snippets from work and life, with links."
    />
    <meta property="og:locale" content="en_US" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="burkh4rt" />
    <meta name="twitter:creator" content="burkh4rt" />
    <meta name="twitter:title" content="Michael Burkhart's website" />
    <meta
      name="twitter:description"
      content="Michael Burkhart's homepage. Snippets from work and life, with links."
    />
    <meta property="twitter:image" content={Msvg} />
    <meta name="twitter:dnt" content="on" />
    <link rel="me" href="https://twitter.com/burkh4rt" />
    <link rel="me" href="https://mathstodon.xyz/@burkh4rt" />
    <link rel="canonical" href="https://burkh4rt.github.io" />
    <meta
      name="google-site-verification"
      content="RBomW7izIX8odL5WjXJS01CR5JonJ1lcE3EsTAbVDPk"
    />
    <LinkedData />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <Fonts />
        <ThemeProvider
          theme={customTheme}
          dayScheme="light"
          nightScheme="dark_dimmed"
        >
          <BaseStyles>
            <SplitPageLayout>
              <SplitPageLayout.Pane
                position="start"
                width={500}
                divider="none"
                // padding="condensed"
              >
                <Box height={400}>
                  <StaticImage
                    src="../images/profile_img.jpg"
                    alt="Michael C. Burkhart"
                    aspectRatio={1}
                    width={300}
                    height={300}
                    style={{ borderRadius: `50%` }}
                    formats={["auto", "webp", "avif"]}
                    placeholder="blurred"
                  />
                  <Box height={10} />

                  <Heading as="h1">Michael C. Burkhart</Heading>
                  <Box height={10} />

                  <SubNav aria-label="Main">
                    <SubNav.Links>
                      <SubNav.Link
                        href="https://www.linkedin.com/in/burkh4rt/"
                        target="_blank"
                      >
                        <img src={LinkedInLogo} alt="LinkedIn" height="20px" />
                      </SubNav.Link>
                      <SubNav.Link
                        href="https://github.com/burkh4rt/"
                        target="_blank"
                      >
                        <img src={GithubLogo} alt="GitHub" height="20px" />
                      </SubNav.Link>
                      <SubNav.Link
                        href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
                        target="_blank"
                      >
                        <img
                          src={GoogleScholarLogo}
                          alt="Google Scholar"
                          height="20px"
                        />
                      </SubNav.Link>
                      <SubNav.Link
                        href="https://orcid.org/0000-0002-2772-5840"
                        target="_blank"
                      >
                        <img src={OrcIDLogo} alt="ORCID" height="20px" />
                      </SubNav.Link>
                      <SubNav.Link
                        href="https://www.inaturalist.org/people/burkh4rt"
                        target="_blank"
                      >
                        <img
                          src={INaturalistLogo}
                          alt="iNaturalist"
                          height="20px"
                        />
                      </SubNav.Link>
                    </SubNav.Links>
                  </SubNav>
                </Box>
              </SplitPageLayout.Pane>

              <SplitPageLayout.Content divider="none" style={{ paddingTop: 0 }}>
                <Pagehead as="h3" style={{ paddingTop: 0 }}>
                  About Me
                </Pagehead>

                <Timeline style={{ maxWidth: `calc(max(75%,500px))` }}>
                  <Timeline.Item>
                    <Timeline.Badge>
                      <Octicon icon={MortarBoardIcon} />
                    </Timeline.Badge>
                    <Timeline.Body sx={{ fontSize: `1rem` }}>
                      I earned my Ph.D. in 2019 from Brown University's Division
                      of Applied Mathematics. For my{" "}
                      <Link href="https://doi.org/10.26300/nhfp-xv22">
                        dissertation
                      </Link>
                      , I derived a novel approach to Bayesian filtering, the
                      Discriminative Kalman Filter, motivated by and developed
                      with my advisor M. Harrison and collaborators D. Brandman
                      and L. Hochberg. We validated and successfully implemented
                      this filter as part of the{" "}
                      <Link href="https://www.braingate.org">BrainGate</Link>{" "}
                      Clinical Trial that enables participants with quadriplegia
                      to communicate and interact with their environments in
                      real time using mental imagery alone.
                    </Timeline.Body>
                  </Timeline.Item>
                  <Timeline.Item>
                    <Timeline.Badge>
                      <Octicon icon={GitCommitIcon} />
                    </Timeline.Badge>
                    <Timeline.Body sx={{ fontSize: `1rem` }}>
                      I then spent three years working as a machine learning
                      scientist at Adobe in California. In 2021, I joined
                      Cambridge University as a research associate to develop
                      machine learning-based approaches for the early diagnosis
                      of neurodegenerative disease.
                    </Timeline.Body>
                  </Timeline.Item>
                </Timeline>

                <SubNav
                  aria-label="Main"
                  style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `flex-end`,
                  }}
                >
                  <SubNav.Links>
                    <SubNav.Link
                      href="/pubs"
                      rel="noopener noreferrer"
                      sx={{ fontSize: `1rem` }}
                    >
                      publications
                    </SubNav.Link>
                    <SubNav.Link
                      href="/links"
                      rel="noopener noreferrer"
                      sx={{ fontSize: `1rem` }}
                    >
                      links
                    </SubNav.Link>
                    <SubNav.Link
                      href="/cv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ fontSize: `1rem` }}
                    >
                      c.v.
                    </SubNav.Link>
                  </SubNav.Links>
                </SubNav>
              </SplitPageLayout.Content>

              <SplitPageLayout.Footer padding="condensed">
                <Text
                  as="p"
                  align="end"
                  style={{ padding: 0, margin: 0, textAlign: `right` }}
                >
                  <Octicon icon={LocationIcon} /> Plainfield, Indiana &copy;
                  2024
                </Text>
              </SplitPageLayout.Footer>
            </SplitPageLayout>
          </BaseStyles>
        </ThemeProvider>
      </body>
    </>
  )
}
