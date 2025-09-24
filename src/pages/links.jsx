import {
  Breadcrumbs,
  Link,
  PageHeader,
  SubNav,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react";

import { LinkExternalIcon } from "@primer/octicons-react";

import Footer from "../components/footer";
import { Helmet } from "react-helmet";

import LinkedInLogo from "../logos/linkedin-logo.svg?react";
import GithubLogo from "../logos/github-logo.svg?react";
import GoogleScholarLogo from "../logos/google-scholar-logo.svg?react";
import OrcIDLogo from "../logos/orcid-logo.svg?react";
import AMSLogo from "../logos/ams-logo.svg?react";
import ZBMathLogo from "../logos/zbmath-logo.svg?react";
import ArXivLogo from "../logos/arxiv-logo.svg?react";
import INaturalistLogo from "../logos/inaturalist-logo.svg?react";
import InstagramLogo from "../logos/instagram-logo.svg?react";

export const Head = () => (
  <Helmet>
    <html lang="en" />
    <title>links</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/links/" />
  </Helmet>
);

export default function Home() {
  return (
    <>
      <Head />
      <BaseStyles>
        <SplitPageLayout sx={{ bg: "canvas.default", minHeight: "100vh" }}>
          <SplitPageLayout.Header>
            <Breadcrumbs>
              <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
              <Breadcrumbs.Item href="#" selected>
                links
              </Breadcrumbs.Item>
            </Breadcrumbs>
          </SplitPageLayout.Header>

          <SplitPageLayout.Content>
            <PageHeader
              padding="normal"
              as="h3"
              id="find-me-online"
              sx={{ fontWeight: "normal" }}
            >
              Online Presence
            </PageHeader>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
                gap: "2rem",
                maxWidth: "calc(max(50%,400px))",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Link
                href="https://www.linkedin.com/in/burkh4rt/"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <LinkedInLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;LinkedIn&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://github.com/burkh4rt/"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <GithubLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;Github&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <GoogleScholarLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;Google Scholar&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://orcid.org/0000-0002-2772-5840"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <OrcIDLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;OrcID&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <AMSLogo style={{ height: "0.75em" }} verticalAlign="middle" />
                &nbsp;MathSciNet&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://zbmath.org/authors/burkhart.michael-c"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <ZBMathLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;zbMath&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                MGP&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://arxiv.org/a/burkhart_m_2.html"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <ArXivLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;arXiv&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://www.inaturalist.org/people/burkh4rt"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <INaturalistLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;iNaturalist&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://ebird.org/profile/NDYwNzg1MA/"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                eBird&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://burkh4rt.tumblr.com"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                tumblr&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://www.instagram.com/burkh4rt/"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                <InstagramLogo
                  style={{ height: "0.75em" }}
                  verticalAlign="middle"
                />
                &nbsp;Instagram&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
              <Link
                href="https://www.instagram.com/felixity_the_cat/"
                target="_blank"
                sx={{ whiteSpace: "nowrap" }}
              >
                Felixity&thinsp;
                <LinkExternalIcon verticalAlign="middle" />
              </Link>
            </div>
          </SplitPageLayout.Content>

          <Footer />
        </SplitPageLayout>
      </BaseStyles>
    </>
  );
}
