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
    <SplitPageLayout
      padding={{
        narrow: "condensed",
        regular: "normal",
        wide: "normal",
      }}
      className="page"
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

        <div className="columnar spaced">
          <Link
            href="https://www.linkedin.com/in/burkh4rt/"
            target="_blank"
            className="nowrap"
          >
            <LinkedInLogo className="three-fourths" />
            &nbsp;LinkedIn&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>
          <Link
            href="https://github.com/burkh4rt/"
            target="_blank"
            className="nowrap"
          >
            <GithubLogo className="three-fourths" />
            &nbsp;Github&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>
          <Link
            href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
            target="_blank"
            className="nowrap"
          >
            <GoogleScholarLogo className="three-fourths" />
            &nbsp;Google Scholar&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>
          <Link
            href="https://orcid.org/0000-0002-2772-5840"
            target="_blank"
            className="nowrap"
          >
            <OrcIDLogo className="three-fourths" />
            &nbsp;OrcID&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>
          <Link
            href="https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691"
            target="_blank"
            className="nowrap"
          >
            <AMSLogo className="three-fourths" />
            &nbsp;MathSciNet&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>
          <Link
            href="https://zbmath.org/authors/burkhart.michael-c"
            target="_blank"
            className="nowrap"
          >
            <ZBMathLogo className="three-fourths" />
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
            <ArXivLogo className="three-fourths" />
            &nbsp;arXiv&thinsp;
            <LinkExternalIcon verticalAlign="middle" />
          </Link>
          <Link
            href="https://www.inaturalist.org/people/burkh4rt"
            target="_blank"
            className="nowrap"
          >
            <INaturalistLogo className="three-fourths" />
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
            <InstagramLogo className="three-fourths" />
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
    </SplitPageLayout>
  );
}
