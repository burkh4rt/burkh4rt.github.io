import React from "react";

import {
  Link,
  PageHeader,
  Timeline,
  Heading,
  SubNav,
  BaseStyles,
  SplitPageLayout,
  Text,
} from "@primer/react";

import {
  MortarBoardIcon,
  GitCommitIcon,
  LinkExternalIcon,
} from "@primer/octicons-react";

import { Helmet } from "react-helmet";

import Footer from "../components/footer";
import ProfileWebp from "../images/profile_img.jpg?format=webp&quality=100&as=srcset";
import ProfileJpg from "../images/profile_img.jpg";

import LinkedInLogo from "../logos/linkedin-logo.svg?react";
import GithubLogo from "../logos/github-logo.svg?react";
import GoogleScholarLogo from "../logos/google-scholar-logo.svg?react";
import OrcIDLogo from "../logos/orcid-logo.svg?react";
import INaturalistLogo from "../logos/inaturalist-logo.svg?react";

export const Head = () => (
  <Helmet>
    <meta
      name="description"
      content="Michael Burkhart's homepage. Snippets from work and life, with links."
    />
    <meta property="og:title" content="Michael Burkhart's website" />
    <meta property="og:type" content="website" />
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
    <meta
      property="twitter:image"
      content="https://burkh4rt.github.io/m.webp"
    />
    <meta name="twitter:dnt" content="on" />
    <link rel="me" href="https://twitter.com/burkh4rt" />
    <link rel="me" href="https://mathstodon.xyz/@burkh4rt" />
    <link rel="canonical" href="https://burkh4rt.github.io" />
    <meta
      name="google-site-verification"
      content="RBomW7izIX8odL5WjXJS01CR5JonJ1lcE3EsTAbVDPk"
    />
  </Helmet>
);

export default function Home() {
  return (
    <>
      <Head />
      <BaseStyles>
        <SplitPageLayout
          sx={{
            bg: "canvas.default",
            minHeight: `100vh`,
            padding: `0 0.75em`,
          }}
        >
          <SplitPageLayout.Pane
            position="start"
            divider="none"
            sx={{
              padding: `0.75em`,
              width: `400px`,
              minWidth: "400px",
              maxWidth: "400px",
              overflow: `hidden`,
            }}
          >
            <picture>
              <source srcset={ProfileWebp} type="image/webp" />
              <img
                src={ProfileJpg}
                alt="photo of Michael C. Burkhart"
                width={300}
                height={300}
                fetchpriority="high"
                style={{
                  borderRadius: `50%`,
                  objectFit: `cover`,
                }}
              />
            </picture>

            <Heading
              as="h1"
              sx={{
                fontWeight: `normal`,
                width: `400px`,
                overflow: `hidden`,
                paddingTop: `10pt`,
              }}
            >
              Michael C. Burkhart
            </Heading>

            <SubNav
              aria-label="Main"
              sx={{ paddingTop: `5pt`, paddingBottom: `10pt` }}
            >
              <SubNav.Links>
                <SubNav.Link
                  href="https://www.linkedin.com/in/burkh4rt/"
                  target="_blank"
                >
                  <LinkedInLogo style={{ height: `20px` }} />
                </SubNav.Link>
                <SubNav.Link
                  href="https://github.com/burkh4rt/"
                  target="_blank"
                >
                  <GithubLogo style={{ height: `20px` }} />
                </SubNav.Link>
                <SubNav.Link
                  href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
                  target="_blank"
                >
                  <GoogleScholarLogo style={{ height: `20px` }} />
                </SubNav.Link>
                <SubNav.Link
                  href="https://orcid.org/0000-0002-2772-5840"
                  target="_blank"
                >
                  <OrcIDLogo style={{ height: `20px` }} />
                </SubNav.Link>
                <SubNav.Link
                  href="https://www.inaturalist.org/people/burkh4rt"
                  target="_blank"
                >
                  <INaturalistLogo style={{ height: `20px` }} />
                </SubNav.Link>
              </SubNav.Links>
            </SubNav>
          </SplitPageLayout.Pane>

          <SplitPageLayout.Content
            divider="none"
            sx={{ paddingTop: 0 }}
            padding="normal"
          >
            <PageHeader as="h3" sx={{ paddingTop: 0, fontWeight: `normal` }}>
              About Me
            </PageHeader>

            <Timeline
              as="section"
              sx={{
                maxWidth: `calc(max(75%,500px))`,
                animationName: "unfaded",
                animationDuration: "0.5s",
                animationFillMode: "forwards",
              }}
            >
              <Timeline.Item>
                <Timeline.Badge>
                  <MortarBoardIcon />
                </Timeline.Badge>
                <Timeline.Body sx={{ fontSize: `1rem` }}>
                  I earned my Ph.D. in 2019 from Brown University's Division of
                  Applied Mathematics. For my{" "}
                  <Link
                    href="https://doi.org/10.26300/nhfp-xv22"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: `nowrap` }}
                  >
                    dissertation&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.6084/m9.figshare.8085749"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      presentation&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ),
                  </Text>{" "}
                  I derived a novel approach to Bayesian filtering, the
                  Discriminative Kalman Filter, motivated by and developed with
                  my advisor M. Harrison and collaborators D. Brandman and L.
                  Hochberg. We validated and successfully implemented this
                  filter as part of the{" "}
                  <Link
                    href="https://www.braingate.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    BrainGate
                  </Link>{" "}
                  Clinical Trial that enables participants with quadriplegia to
                  communicate and interact with their environments in real time
                  using mental imagery alone{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.1162/neco_a_01275"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ).
                  </Text>
                </Timeline.Body>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Badge>
                  <GitCommitIcon />
                </Timeline.Badge>
                <Timeline.Body sx={{ fontSize: `1rem` }}>
                  I then spent three years working as a machine learning
                  scientist at Adobe in California. My main projects involved
                  customer segmentation and causal inference. I also supervised
                  intern projects in representation learning for semi-supervised
                  classification{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.1007/978-3-030-50420-5_22"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ,
                  </Text>{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    <Link
                      href="https://patents.google.com/patent/US11455518B2"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      patent&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    )
                  </Text>{" "}
                  and causal inference{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.1016/j.jocs.2023.102054"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ,
                  </Text>{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    <Link
                      href="https://patents.google.com/patent/US20230376776A1"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      patent pending&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ,
                  </Text>{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    <Link
                      href="https://doi.org/10.6084/m9.figshare.24990633"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      presentation&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ).
                  </Text>
                </Timeline.Body>
              </Timeline.Item>
              <Timeline.Item>
                <Timeline.Badge>
                  <GitCommitIcon />
                </Timeline.Badge>
                <Timeline.Body sx={{ fontSize: `1rem` }}>
                  In 2021, I joined Cambridge University as a research associate
                  to develop machine learning-based approaches for the early
                  diagnosis of neurodegenerative disease{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.1002/alz.062434"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                      sx={{ whiteSpace: `nowrap` }}
                    >
                      abstract&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ,
                  </Text>{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    <Link
                      href="https://www.c2d3.cam.ac.uk/sites/www.c2d3.cam.ac.uk/files/attachments/2023-01/michael_burkhart_-_trustworthy_ai_workshop_-_updated.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                      sx={{ whiteSpace: `nowrap` }}
                    >
                      presentation&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ,
                  </Text>{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    <Link
                      href="https://doi.org/10.1038/s41598-024-60914-w"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                      sx={{ whiteSpace: `nowrap` }}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ).
                  </Text>{" "}
                  I also investigated how sequential inference can be applied to
                  optimization{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.1007/s11590-022-01895-5"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    )
                  </Text>{" "}
                  and conditions for non-coprime actions in abstract groups to
                  have fixed points{" "}
                  <Text sx={{ whiteSpace: `nowrap` }}>
                    (
                    <Link
                      href="https://doi.org/10.1017/prm.2023.96"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ,{" "}
                    <Link
                      href="https://doi.org/10.1017/S0017089524000363"
                      target="_blank"
                      rel="noopener noreferrer"
                      inline={true}
                    >
                      paper&thinsp;
                      <LinkExternalIcon verticalAlign="middle" />
                    </Link>
                    ).
                  </Text>
                </Timeline.Body>
              </Timeline.Item>

              <Timeline.Item>
                <Timeline.Badge>
                  <GitCommitIcon />
                </Timeline.Badge>
                <Timeline.Body sx={{ fontSize: `1rem` }}>
                  In 2024, I joined the{" "}
                  <Link
                    href="https://bbjlab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Beaulieu-Jones Lab
                  </Link>{" "}
                  at the University of Chicago to continue working to improve
                  machine learning for healthcare applications.
                </Timeline.Body>
              </Timeline.Item>
            </Timeline>

            <SubNav
              aria-label="Main"
              padding="normal"
              paddingTop="10pt"
              sx={{
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
                  href="cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ fontSize: `1rem` }}
                >
                  c.v.
                </SubNav.Link>
              </SubNav.Links>
            </SubNav>
          </SplitPageLayout.Content>

          <Footer />
        </SplitPageLayout>
      </BaseStyles>
    </>
  );
}
