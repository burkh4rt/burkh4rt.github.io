import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import Msvg from "../logos/m.svg"
import Theme from "../components/component_theme"
import GlobalReset from "../components/component_normalize"
import Fonts from "../components/fonts"
import PrintStyle from "../components/print"

import {
  Deck,
  Col,
  Card,
  CardTitle,
  CardContent,
  HeaderCard,
  MediaCard,
  FooterCard,
  ImgRow,
} from "../components/layouts"

import GithubLogo from "../logos/github-logo.svg"
import INaturalistLogo from "../logos/inaturalist-logo.svg"
// import InstagramLogo from "../logos/instagram-logo.svg"
import LinkedInLogo from "../logos/linkedin-logo.svg"
import GoogleScholarLogo from "../logos/google-scholar.svg"
import OrcIDLogo from "../logos/orcid-logo.svg"
// import TwitterLogo from "../logos/twitter-logo.svg"

function LinkedData() {
  return (
    <script type="application/ld+json">
      {`
        {
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          "dateCreated": "2019-05-19T17:52:51-07:00",
          "dateModified": "2024-04-04T11:52:00-05:00",
          "mainEntity": {
            "@type": "Person",
            "name": "Michael C. Burkhart",
            "familyName": "Burkhart",
            "givenName": "Michael",
            "honorificPrefix": "Dr.",
            "honorificSuffix": "Ph.D.",
            "nationality": "US",
            "birthPlace": {
                "@type": "Place",
                "address": {
                  "addressLocality": "Cincinnati",
                  "addressRegion": "Ohio",
                  "addressCountry": "US"
                }
            },
            "sameAs": [
                "https://burkh4rt.github.io",
                "https://www.wikidata.org/wiki/Q60057814",
                "https://viaf.org/viaf/439162664218455000792",
                "https://isni.org/isni/0000000502720308",
                "https://academictree.org/math/peopleinfo.php?pid=784634",
                "https://dl.acm.org/profile/99659347035",
                "https://aminer.cn/profile/62e47ef4d9f204418d68e981",
                "https://arxiv.org/a/burkhart_m_2.html",
                "https://bsky.app/profile/burkh4rt.bsky.social",
                "https://dblp.uni-trier.de/pid/223/5859.html",
                "https://app.dimensions.ai/details/entities/publication/author/ur.010351326437.47",
                "https://github.com/burkh4rt",
                "https://www.google.com/search?kgmid=/g/11fkdtqf1m",
                "https://scholar.google.com/citations?user=OcFnA0UAAAAJ",
                "https://cv.archives-ouvertes.fr/burkh4rt",
                "https://www.inaturalist.org/people/7851757",
                "https://www.instagram.com/burkh4rt",
                "https://www.linkedin.com/in/burkh4rt",
                "https://mathstodon.xyz/@burkh4rt",
                "https://mathgenealogy.org/id.php?id=246430",
                "https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691",
                "https://openlibrary.org/works/OL9118704A",
                "https://openalex.org/A5005277906",
                "https://orcid.org/0000-0002-2772-5840",
                "https://www.webofscience.com/wos/author/record/HKP-2519-2023",
                "https://www.researchgate.net/profile/Michael-Burkhart-2",
                "https://www.scienceopen.com/user/32247102-0224-4f91-80cc-94e7fbc3256f",
                "https://www.scopus.com/authid/detail.uri?authorId=56094628500",
                "https://www.semanticscholar.org/author/Michael-C.-Burkhart/48820417",
                "https://twitter.com/burkh4rt",
                "https://x.com/burkh4rt",
                "https://zbmath.org/authors/?q=ai:burkhart.michael-c",
                "https://www.facebook.com/burkh4rt",
                "https://burkh4rt.tumblr.com",
                "https://gravatar.com/burkh4rt",
                "https://publons.com/researcher/2926384/michael-c-burkhart",
                "https://profiles.impactstory.org/u/0000-0002-2772-5840",
                "https://figshare.com/authors/Michael_C_Burkhart/6643982",
                "https://osf.io/9qvh7",
                "https://scholia.toolforge.org/author/Q60057814",
                "https://europepmc.org/authors/0000-0002-2772-5840",
                "https://www.lens.org/lens/profile/326252578",
                "https://www.c2d3.cam.ac.uk/directory/16451/michael-burkhart",
                "https://neuroscience.cam.ac.uk/member/burkh4rt/",
                "https://gitlab.developers.cam.ac.uk/mcb93",
                "https://gitlab.com/burkh4rt",
                "https://mcb93.user.srcf.net",
                "https://www.last.fm/user/burkh4rt",
                "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5871438",
                "https://vsco.co/burkh4rt",
                "https://500px.com/p/burkh4rt",
                "https://rivyl-6aaaa-aaaaf-qaapq-cai.raw.ic0.app/0xe15a51c1e45df29fcfb928fc488616196757ca21",
                "https://oneblock.page/burkh4rt",
                "https://math.stackexchange.com/users/104086/burkh4rt",
                "https://stackoverflow.com/users/8345382/burkh4rt",
                "https://www.hackerrank.com/profile/burkh4rt",
                "https://linktr.ee/burkh4rt",
                "https://pypi.org/user/burkh4rt/",
                "https://hub.docker.com/u/burkh4rt",
                "https://astral.ninja/npub1skcf4dpqkqvceked9ejxxtf7a55fz2y3vt6kdaefqdhay9p4xuusg5mgkj",
                "https://snort.social/nprofile1qqsgtvy6ksstqxvvmvkjuerr95lw62y39zgk9atx7u5sxm7jzs6nwwgxqmrs5",
                "https://app.codesignal.com/profile/burkh4rt/",
                "https://leetcode.com/burkh4rt/",
                "https://imgur.com/user/burkh4rt",
                "https://archive.org/details/@burkh4rt?tab=web-archive",
                "https://www.behance.net/burkh4rt",
                "https://www.researchgate.net/profile/Michael-Burkhart-2",
                "https://deepai.org/profile/michael-c-burkhart",
                "https://ebird.org/profile/NDYwNzg1MA",
                "https://golden.com/wiki/Michael_Craig_Burkhart-R3EBJGX"
            ],
            "image": "https://commons.wikimedia.org/wiki/File:Michael_C._Burkhart.jpg",
            "alumniOf": [
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Purdue University",
                  "sameAs": "https://www.purdue.edu"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Rutgers University",
                  "sameAs": "https://www.rutgers.edu"
                },
                {
                  "@type": "CollegeOrUniversity",
                  "name": "Brown University",
                  "sameAs": "https://www.brown.edu"
                }
            ]
          }
        }
      `}
    </script>
  )
}

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

export default function Home({ data }) {
  return (
    <>
      <body>
        <GlobalReset />
        <Fonts />
        <Theme>
          <Deck>
            <Col>
              <HeaderCard>
                <h1>Michael C. Burkhart</h1>
              </HeaderCard>

              <MediaCard>
                <GatsbyImage
                  image={data.file.childImageSharp.gatsbyImageData}
                  alt="Michael C. Burkhart"
                />
              </MediaCard>
            </Col>

            <div style={{ columnBreakInside: `avoid`, breakInside: `avoid` }}>
              <Card>
                <CardTitle>About Me</CardTitle>
                <CardContent>
                  I earned my <span itemprop="honorificSuffix">Ph.D.</span> in
                  2019 from{" "}
                  <span
                    itemprop="alumniOf"
                    itemscope
                    itemtype="http://schema.org/CollegeOrUniversity"
                  >
                    <span itemprop="name">Brown University</span>
                    's{" "}
                    <span itemprop="department">
                      Division of Applied Mathematics
                    </span>
                  </span>
                  . For my{" "}
                  <a href="https://doi.org/10.26300/nhfp-xv22">dissertation</a>,
                  I derived a novel approach to{" "}
                  <span itemprop="knowsAbout">Bayesian filtering</span>, the
                  Discriminative Kalman Filter, motivated by and developed with
                  my advisor M. Harrison and collaborators D. Brandman and L.
                  Hochberg. We validated and successfully implemented this
                  filter as part of the{" "}
                  <span itemprop="affiliation">
                    <a href="https://www.braingate.org">BrainGate</a> Clinical
                    Trial
                  </span>{" "}
                  that enables participants with quadriplegia to communicate and
                  interact with their environments in real time using mental
                  imagery alone.
                </CardContent>
                <CardContent style={{ marginTop: `-0.25em` }}>
                  I then spent three years working as a machine learning
                  scientist at Adobe in California. In 2021, I joined Cambridge
                  University as a research associate to develop machine
                  learning-based approaches for the early diagnosis of
                  neurodegenerative disease.
                </CardContent>
              </Card>

              <Card>
                <CardTitle>Sections</CardTitle>
                <ImgRow style={{ paddingTop: 0 }}>
                  <Link to="/pubs" target="_blank" rel="noopener noreferrer">
                    publications ☜
                  </Link>
                  <Link
                    to="/on-filtering"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bayesian filtering ☜
                  </Link>
                </ImgRow>
              </Card>

              <Card>
                <CardTitle>Find Me Online</CardTitle>
                <ImgRow>
                  <a
                    href="https://www.linkedin.com/in/burkh4rt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={LinkedInLogo} alt="LinkedIn" />
                  </a>
                  <a
                    href="https://github.com/burkh4rt/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={GithubLogo} alt="GitHub" />
                  </a>
                  <a
                    href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={GoogleScholarLogo} alt="Google Scholar" />
                  </a>
                  <a
                    href="https://orcid.org/0000-0002-2772-5840"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={OrcIDLogo} alt="ORCID" />
                  </a>
                  <a
                    href="https://www.inaturalist.org/people/burkh4rt"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={INaturalistLogo} alt="iNaturalist" />
                  </a>
                </ImgRow>
              </Card>

              <FooterCard>
                <h5 id="cv">
                  <Link to="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    {" "}
                    C.V. ☜
                  </Link>
                </h5>
                <p id="locale">
                  © Michael C. Burkhart, {data.site.year} <br />
                  Plainfield, Indiana
                </p>
              </FooterCard>
            </div>
          </Deck>
        </Theme>
        <PrintStyle />
      </body>
    </>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "profile_img.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          aspectRatio: 1
          width: 300
          quality: 90
          placeholder: BLURRED
          layout: CONSTRAINED
          formats: [AUTO, WEBP, AVIF]
          transformOptions: { fit: INSIDE, cropFocus: ATTENTION }
        )
      }
    }
    site {
      year: buildTime(formatString: "YYYY")
    }
  }
`
