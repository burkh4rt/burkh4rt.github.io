import { Breadcrumbs, PageHeader, SplitPageLayout } from "@primer/react";
import { Tiles } from "@primer/react-brand";

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
    <SplitPageLayout className="page">
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

        <Tiles variant="gridlines">
          <Tiles.Item
            name="LinkedIn"
            href="https://www.linkedin.com/in/burkh4rt/"
          >
            <LinkedInLogo />
          </Tiles.Item>
          <Tiles.Item name="Github" href="https://github.com/burkh4rt/">
            <GithubLogo />
          </Tiles.Item>
          <Tiles.Item
            name="Google Scholar"
            href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
          >
            <GoogleScholarLogo />
          </Tiles.Item>
          <Tiles.Item name="OrcID" href="https://orcid.org/0000-0002-2772-5840">
            <OrcIDLogo />
          </Tiles.Item>
          <Tiles.Item
            name="MathSciNet"
            href="https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691"
          >
            <AMSLogo />
          </Tiles.Item>
          <Tiles.Item
            name="zbMath"
            href="https://zbmath.org/authors/burkhart.michael-c"
          >
            <ZBMathLogo />
          </Tiles.Item>
          <Tiles.Item
            name="MGP"
            href="https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430"
          />
          <Tiles.Item name="arXiv" href="https://arxiv.org/a/burkhart_m_2.html">
            <ArXivLogo />
          </Tiles.Item>
          <Tiles.Item
            name="iNaturalist"
            href="https://www.inaturalist.org/people/burkh4rt"
          >
            <INaturalistLogo />
          </Tiles.Item>
          <Tiles.Item
            name="eBird"
            href="https://ebird.org/profile/NDYwNzg1MA/"
          />
          <Tiles.Item name="tumblr" href="https://burkh4rt.tumblr.com" />
          <Tiles.Item
            name="Instagram"
            href="https://www.instagram.com/burkh4rt/"
          >
            <InstagramLogo />
          </Tiles.Item>
          <Tiles.Item
            name="Felixity"
            href="https://www.instagram.com/felixity_the_cat/"
          />
        </Tiles>
      </SplitPageLayout.Content>

      <Footer pathname={pathname} />
    </SplitPageLayout>
  );
}
