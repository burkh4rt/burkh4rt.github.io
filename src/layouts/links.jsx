import { LinkExternalIcon } from "@primer/octicons-react";
import { Breadcrumbs, Link, PageHeader, SplitPageLayout } from "@primer/react";
import { Card } from "@primer/react/experimental";

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

const links = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/burkh4rt/",
    logo: LinkedInLogo,
  },
  {
    name: "Github",
    href: "https://github.com/burkh4rt/",
    logo: GithubLogo,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com/citations?user=OcFnA0UAAAAJ",
    logo: GoogleScholarLogo,
  },
  {
    name: "OrcID",
    href: "https://orcid.org/0000-0002-2772-5840",
    logo: OrcIDLogo,
  },
  {
    name: "MathSciNet",
    href: "https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691",
    logo: AMSLogo,
  },
  {
    name: "zbMath",
    href: "https://zbmath.org/authors/burkhart.michael-c",
    logo: ZBMathLogo,
  },
  {
    name: "MGP",
    href: "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430",
  },
  {
    name: "arXiv",
    href: "https://arxiv.org/a/burkhart_m_2.html",
    logo: ArXivLogo,
  },
  {
    name: "iNaturalist",
    href: "https://www.inaturalist.org/people/burkh4rt",
    logo: INaturalistLogo,
  },
  {
    name: "eBird",
    href: "https://ebird.org/profile/NDYwNzg1MA/",
  },
  {
    name: "tumblr",
    href: "https://burkh4rt.tumblr.com",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/burkh4rt/",
    logo: InstagramLogo,
  },
  {
    name: "Felixity",
    href: "https://www.instagram.com/felixity_the_cat/",
  },
];

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

        <ul className="link-card-grid">
          {links.map(({ name, href, logo: Logo }) => (
            <li key={href}>
              <Card
                layout="compact"
                borderRadius="medium"
                className="link-card"
              >
                {Logo ? (
                  <Card.Icon icon={Logo} className="link-card-icon" />
                ) : null}
                <Card.Heading as="h4">
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-card-overlay nowrap"
                  >
                    {name}&thinsp;
                    <LinkExternalIcon
                      verticalAlign="middle"
                      aria-hidden="true"
                    />
                  </Link>
                </Card.Heading>
              </Card>
            </li>
          ))}
        </ul>
      </SplitPageLayout.Content>

      <Footer pathname={pathname} />
    </SplitPageLayout>
  );
}
