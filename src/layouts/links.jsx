import { LinkExternalIcon } from "@primer/octicons-react";
import { Breadcrumbs, Link, PageHeader, SplitPageLayout } from "@primer/react";

import Footer from "../components/footer";
import AMSLogo from "../logos/ams-logo.svg?react";
import ArXivLogo from "../logos/arxiv-logo.svg?react";
import GithubLogo from "../logos/github-logo.svg?react";
import GoogleScholarLogo from "../logos/google-scholar-logo.svg?react";
import INaturalistLogo from "../logos/inaturalist-logo.svg?react";
import InstagramLogo from "../logos/instagram-logo.svg?react";
import LinkedInLogo from "../logos/linkedin-logo.svg?react";
import OrcIDLogo from "../logos/orcid-logo.svg?react";
import ZBMathLogo from "../logos/zbmath-logo.svg?react";

import "../styles/globals.css";

export default function LinksLayout({ pathname }) {
  return (
    <>
      <SplitPageLayout
        style={{
          backgroundColor: "var(--bgColor-default)",
          minHeight: "100vh",
        }}
      >
        <SplitPageLayout.Header>
          <Breadcrumbs>
            <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
            <Breadcrumbs.Item selected>links</Breadcrumbs.Item>
          </Breadcrumbs>
        </SplitPageLayout.Header>

        <SplitPageLayout.Content>
          <PageHeader
            padding="normal"
            as="h3"
            id="find-me-online"
            className="normal-weight"
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
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="columnar"
          >
            <Link
              href="https://www.linkedin.com/in/burkh4rt/"
              target="_blank"
              className="nowrap"
            >
              <LinkedInLogo style={{ height: "0.75em" }} />
              &nbsp;LinkedIn&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://github.com/burkh4rt/"
              target="_blank"
              className="nowrap"
            >
              <GithubLogo style={{ height: "0.75em" }} />
              &nbsp;Github&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
              target="_blank"
              className="nowrap"
            >
              <GoogleScholarLogo style={{ height: "0.75em" }} />
              &nbsp;Google Scholar&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://orcid.org/0000-0002-2772-5840"
              target="_blank"
              className="nowrap"
            >
              <OrcIDLogo style={{ height: "0.75em" }} />
              &nbsp;OrcID&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691"
              target="_blank"
              className="nowrap"
            >
              <AMSLogo style={{ height: "0.75em" }} />
              &nbsp;MathSciNet&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://zbmath.org/authors/burkhart.michael-c"
              target="_blank"
              className="nowrap"
            >
              <ZBMathLogo style={{ height: "0.75em" }} />
              &nbsp;zbMath&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430"
              target="_blank"
              className="nowrap"
            >
              MGP&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://arxiv.org/a/burkhart_m_2.html"
              target="_blank"
              className="nowrap"
            >
              <ArXivLogo style={{ height: "0.75em" }} />
              &nbsp;arXiv&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://www.inaturalist.org/people/burkh4rt"
              target="_blank"
              className="nowrap"
            >
              <INaturalistLogo style={{ height: "0.75em" }} />
              &nbsp;iNaturalist&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://ebird.org/profile/NDYwNzg1MA/"
              target="_blank"
              className="nowrap"
            >
              eBird&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://burkh4rt.tumblr.com"
              target="_blank"
              className="nowrap"
            >
              tumblr&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://www.instagram.com/burkh4rt/"
              target="_blank"
              className="nowrap"
            >
              <InstagramLogo style={{ height: "0.75em" }} />
              &nbsp;Instagram&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
            <Link
              href="https://www.instagram.com/felixity_the_cat/"
              target="_blank"
              className="nowrap"
            >
              Felixity&thinsp;
              <LinkExternalIcon verticalAlign="middle" />
            </Link>
          </div>
        </SplitPageLayout.Content>

        <Footer pathname={pathname} />
      </SplitPageLayout>{" "}
    </>
  );
}
