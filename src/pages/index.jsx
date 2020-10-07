import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Msvg from "../logos/m.svg"
import CVpdf from "../docs/cv20.pdf"
import DKFslides from "../docs/dkf-slides.pdf"

import Theme from "../components/component_theme"
import GlobalReset from "../components/component_normalize"
import Fonts from "../components/fonts"
import PrintStyle from "../components/print"

import {
  Deck,
  Card,
  CardTitle,
  CardFooter,
  CardContent,
  HeaderCard,
  MediaCard,
  FooterCard,
  ImgRow,
  MathElt,
  MathEltGreen,
  MathEltNavy,
  MathEltRed,
  TextGreen,
  TextNavy,
  TextRed,
  EqnSVG,
} from "../components/layouts"

import BayesianGraphicalEqn from "../eqns/bayesian_graphical.svg"
import ChapmanKolmogorovEqn from "../eqns/chapman_kolmogorov.svg"
import DKFGraphicalEqn from "../eqns/dkf_graphical.svg"
import GraphicalModelEqn from "../eqns/graphical_model.svg"
import KalmanGraphicalEqn from "../eqns/kalman_graphical.svg"

import GithubLogo from "../logos/github-logo.svg"
import InstagramLogo from "../logos/instagram-logo.svg"
import LinkedInLogo from "../logos/linkedin-logo.svg"
import OrcIDLogo from "../logos/orcid-logo.svg"
import TwitterLogo from "../logos/twitter-logo.svg"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>Michael Burkhart's website</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
        <meta
          name="description"
          content="Michael Burkhart's homepage. Snippets from work and life, with links."
        />
        <meta
          name="keywords"
          content="Michael Burkhart,Michael C. Burkhart,Ph.D.,Brown University,Applied Mathematics,Statistics,Bayesian Filtering,neural decoding,Discriminative Kalman Filter"
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

        <link rel="canonical" href="https://burkh4rt.github.io" />
        <meta
          name="google-site-verification"
          content="RBomW7izIX8odL5WjXJS01CR5JonJ1lcE3EsTAbVDPk"
        />
        <meta name="yandex-verification" content="fe20013480c99cd5" />

        <script type="application/ld+json">
          {`
              {
                "@context": "http://schema.org/",
                "@graph": [
                  {
                    "@type": "Person",
                    "name": "Michael C. Burkhart",
                    "alumniOf": {
                      "@type": "CollegeOrUniversity",
                      "name": "Brown University",
                      "department": "Division of Applied Mathematics",
                      "foundingDate": "1764",
                      "foundingLocation": {
                        "@type": "Place",
                        "address": {
                          "addressLocality": "Providence",
                          "addressRegion": "RI",
                          "addressCountry": "US"
                        }
                      },
                      "legalName": "Brown University in Providence in the State of Rhode Island and Providence Plantations",
                      "leiCode": "9M13ULPHBPDR83N6CB89",
                      "sameAs": "https://www.brown.edu"
                    },
                    "birthPlace": {
                      "@type": "Place",
                      "address": {
                        "addressLocality": "Cincinnati",
                        "addressRegion": "OH",
                        "addressCountry": "US"
                      }
                    },
                    "familyName": "Burkhart",
                    "givenName": "Michael",
                    "honorificPrefix": "Dr.",
                    "honorificSuffix": "Ph.D.",
                    "nationality": "US",
                    "sameAs": [
                      "https://burkh4rt.github.io",
                      "https://www.linkedin.com/in/burkh4rt",
                      "https://github.com/burkh4rt",
                      "https://www.instagram.com/burkh4rt",
                      "https://twitter.com/burkh4rt",
                      "https://www.facebook.com/burkh4rt",
                      "https://www.behance.net/burkh4rt",
                      "https://burkh4rt.tumblr.com",
                      "https://en.gravatar.com/burkh4rt",
                      "https://orcid.org/0000-0002-2772-5840",
                      "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430",
                      "https://www.scopus.com/authid/detail.uri?authorId=56094628500",
                      "https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691",
                      "https://publons.com/researcher/2926384/michael-c-burkhart",
                      "https://profiles.impactstory.org/u/0000-0002-2772-5840",
                      "https://figshare.com/authors/Michael_C_Burkhart/6643982",
                      "https://www.mendeley.com/profiles/michael-burkhart2",
                      "https://dblp.org/pers/hd/b/Burkhart:Michael_C=",
                      "https://dl.acm.org/author_page.cfm?id=99659347035",
                      "https://www.scienceopen.com/user/burkh4rt",
                      "https://scholar.google.com/citations?user=OcFnA0UAAAAJ",
                      "https://academictree.org/math/peopleinfo.php?pid=784634",
                      "https://www.semanticscholar.org/author/Michael-C.-Burkhart/48820417",
                      "https://osf.io/9qvh7",
                      "https://www.wikidata.org/wiki/Q60057814",
                      "https://europepmc.org/authors/0000-0002-2772-5840"
                    ]
                  },
                  {
                    "@type": "Thesis",
                    "author": {
                      "@type": "Person",
                      "name": "Michael C. Burkhart",
                      "sameAs": "https://burkh4rt.github.io"
                    },
                    "copyrightYear": "2019",
                    "inSupportOf": "Applied Mathematics",
                    "locationCreated": {
                      "@type": "Place",
                      "address": {
                        "addressLocality": "Providence",
                        "addressRegion": "RI",
                        "addressCountry": "US"
                      }
                    },
                    "name": "A Discriminative Approach to Bayesian Filtering with Applications to Human Neural Decoding",
                    "sourceOrganization": {
                      "@type": "CollegeOrUniversity",
                      "name": "Brown University",
                      "sameAs": "https://www.brown.edu"
                    },
                    "url": "https://doi.org/10.26300/nhfp-xv22",
                    "sameAs": [
                      "https://doi.org/10.31237/osf.io/4j3fu",
                      "https://arxiv.org/abs/1807.06173",
                      "https://repository.library.brown.edu/studio/item/bdr:919147",
                      "https://www.zenodo.org/record/3686561"
                    ]
                  }
                ]
              }
            `}
        </script>
      </Helmet>

      <body>
        <GlobalReset />
        <Fonts />
        <Theme>
          <Deck>
            <HeaderCard>
              <h2>Menagerie</h2>
              <h1>Michael C. Burkhart</h1>
            </HeaderCard>

            <Card>
              <CardTitle>Hello</CardTitle>
              <CardContent>… and welcome to my website.</CardContent>
            </Card>

            <MediaCard>
              <Img
                fluid={data.file.childImageSharp.fluid}
                alt="Michael C. Burkhart"
              />
            </MediaCard>

            <Card>
              <CardTitle>About Me</CardTitle>
              <CardContent>
                I'm a recently-graduated{" "}
                <span itemprop="honorificSuffix">Ph.D.</span> from{" "}
                <span
                  itemprop="alumniOf"
                  itemscope
                  itemtype="http://schema.org/CollegeOrUniversity"
                >
                  <span itemprop="name">Brown University</span>'s{" "}
                  <span itemprop="department">
                    Division of Applied Mathematics
                  </span>
                </span>
                . For my{" "}
                <a href="https://doi.org/10.26300/nhfp-xv22">dissertation</a>, I
                derived a novel approach to{" "}
                <span itemprop="knowsAbout">Bayesian filtering</span>, the
                Discriminative Kalman Filter, motivated by and developed with my
                advisor M. Harrison and collaborator D. Brandman. We validated
                and successfully implemented this filter as part of the{" "}
                <span itemprop="affiliation">
                  <a href="https://www.braingate.org">BrainGate</a> Clinical
                  Trial
                </span>{" "}
                to enable participants with quadriplegia to communicate and
                interact with their environments in real time using mental
                imagery alone. See slides from my defense{" "}
                <a href={DKFslides} target="_blank" rel="noopener noreferrer">
                  here.
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Filtering</CardTitle>
              <CardContent>
                Suppose there is some underlying process{" "}
                <MathElt>
                  Z<sub>1:t</sub>=Z<sub>1</sub>,…,Z<sub>t</sub>
                </MathElt>{" "}
                about which we are very interested, but that we cannot observe.
                Instead, we are sequentially presented with observations or
                measurements{" "}
                <MathElt>
                  X<sub>1:t</sub>=X<sub>1</sub>,…,X<sub>t</sub>
                </MathElt>{" "}
                where each{" "}
                <MathElt>
                  X<sub>i</sub>
                </MathElt>{" "}
                depends only on the current latent state{" "}
                <MathElt>
                  Z<sub>i</sub>
                </MathElt>
                 . We visualize this process with the following graph:
                <EqnSVG>
                  <img
                    src={GraphicalModelEqn}
                    alt="Graphical Model for Filtering"
                    style={{ width: `calc(257.51 / 319.35 * 95%)` }}
                  />
                </EqnSVG>
                <i>Filtering</i> is the process by which we use the observations{" "}
                <MathElt>
                  X<sub>1</sub>,…,X<sub>t</sub>
                </MathElt>{" "}
                to form our best guess for the current latent state{" "}
                <MathElt>
                  Z<sub>t</sub>
                </MathElt>
                 .
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Dynamic State Space Models</CardTitle>
              <CardContent>
                Under the Bayesian approach to filtering,{" "}
                <MathElt>
                  X<sub>1:t</sub> , Z<sub>1:t</sub>
                </MathElt>{" "}
                are endowed with a joint probability distribution. The graphical
                model encodes the process to generate{" "}
                <MathElt>
                  X<sub>1:t</sub> , Z<sub>1:t</sub>
                </MathElt>{" "}
                as:
                <EqnSVG>
                  <img
                    src={BayesianGraphicalEqn}
                    alt="Graphical Model with Equations"
                    style={{ width: `calc(302.34 / 319.35 * 95%)` }}
                  />
                </EqnSVG>
                This model is variously known as a <i>dynamic state-space</i> or
                hidden Markov model. It provides a visual description of how to
                generate a sample{" "}
                <MathElt>
                  x<sub>1:t</sub> , z<sub>1:t</sub>
                </MathElt>{" "}
                from the random variables{" "}
                <MathElt>
                  X<sub>1:t</sub> , Z<sub>1:t</sub>
                </MathElt>
                . We start with{" "}
                <MathElt>
                  z<sub>1</sub>
                </MathElt>{" "}
                drawn from its marginal distribution{" "}
                <MathElt>
                  p(z<sub>1</sub>)
                </MathElt>
                . We then generate an observation{" "}
                <MathElt>
                  x<sub>1</sub>
                </MathElt>{" "}
                using the distribution{" "}
                <MathEltGreen>
                  p(x<sub>1</sub>|z<sub>1</sub>)
                </MathEltGreen>
                . At each subsequent time step <MathElt>t</MathElt>, we draw{" "}
                <MathElt>
                  z<sub>t</sub>
                </MathElt>{" "}
                from the distribution{" "}
                <MathEltNavy>
                  p(z<sub>t</sub>|z<sub>t-1</sub>)
                </MathEltNavy>{" "}
                and{" "}
                <MathElt>
                  x<sub>t</sub>
                </MathElt>{" "}
                from the distribution{" "}
                <MathEltGreen>
                  p(x<sub>t</sub>|z<sub>t</sub>)
                </MathEltGreen>
                . These two conditional distributions are very important and
                characterize the generative process up to the specification of{" "}
                <MathElt>
                  {" "}
                  Z<sub>1</sub>
                </MathElt>
                . The first,{" "}
                <MathEltNavy>
                  p(z<sub>t</sub>|z<sub>t-1</sub>)
                </MathEltNavy>
                , relates the state at time <MathElt>t</MathElt> to the state at
                time <MathElt>t-1</MathElt> and is often called the{" "}
                <TextNavy>state or prediction model</TextNavy>. The second,{" "}
                <MathEltGreen>
                  p(x<sub>t</sub>|z<sub>t</sub>)
                </MathEltGreen>
                , relates the current observation to the current state and is
                called the{" "}
                <TextGreen>measurement or observation model</TextGreen>.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Bayesian Filtering</CardTitle>
              <CardContent>
                The <i>Bayesian</i> solution to the filtering problem returns
                the conditional distribution of{" "}
                <MathElt>
                  Z<sub>t</sub>
                </MathElt>{" "}
                given that{" "}
                <MathElt>
                  X<sub>1</sub> ,…, X<sub>t</sub>
                </MathElt>{" "}
                have been observed to be{" "}
                <MathElt>
                  x<sub>1</sub> ,…, x<sub>t</sub>
                </MathElt>
                 . We refer to this distribution{" "}
                <MathEltRed>
                  p(z<sub>t</sub>|x<sub>1:t</sub>)
                </MathEltRed>{" "}
                as the <TextRed>posterior</TextRed>. The Chapman–Kolmogorov
                recursion
                <EqnSVG>
                  <img
                    src={ChapmanKolmogorovEqn}
                    alt="Chapman–Kolmogorov Equation"
                    style={{ width: `calc(319.35 / 319.35 * 95%)` }}
                  />
                </EqnSVG>
                relates the <TextRed>posterior</TextRed> at time{" "}
                <MathElt>t</MathElt> to the one at time <MathElt>t-1</MathElt>.
                Bayesian filtering solves or approximates the above integral.
                Common approaches include Kalman filtering, variational methods,
                quadrature methods, and Monte Carlo-based particle filtering.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Kalman Filter</CardTitle>
              <CardContent>
                The <i>Kalman</i> filter specifies both the{" "}
                <TextNavy>state model</TextNavy> and{" "}
                <TextGreen>measurement model</TextGreen> as linear, Gaussian.
                <EqnSVG>
                  <img
                    src={KalmanGraphicalEqn}
                    alt="Kalman Graphical Model"
                    style={{ width: `calc(222.52 / 319.35 * 95%)` }}
                  />
                </EqnSVG>
                Here,{" "}
                <MathElt>
                  η<sub>d</sub>(· ; μ ,Σ)
                </MathElt>{" "}
                denotes the <MathElt>d</MathElt>-dimensional Gaussian density
                with mean <MathElt>μ</MathElt> and covariance{" "}
                <MathElt>Σ</MathElt>. In this way, the{" "}
                <TextRed>posterior</TextRed> is Gaussian and quickly computable.
                NASA used a variant of this filter to orient the Apollo Lunar
                Module and land the first humans on the moon.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Our Approach</CardTitle>
              <CardContent>
                We apply Bayes' rule to the{" "}
                <TextGreen>measurement model</TextGreen> and make the Gaussian
                approximation{" "}
                <MathEltGreen>
                  p(z<sub>t</sub>|x<sub>t</sub>) ≈ η
                  <sub>d</sub>(z<sub>t</sub> ; f(x<sub>t</sub>
                  ), Q(x<sub>t</sub>))
                </MathEltGreen>{" "}
                where the functions <MathElt>f</MathElt> and{" "}
                <MathElt>Q</MathElt> can be learned from data.
                <EqnSVG>
                  <img
                    src={DKFGraphicalEqn}
                    alt="Discriminative Kalman Filter Graphical Model"
                    style={{ width: `calc(259.88 / 319.35 * 95%)` }}
                  />
                </EqnSVG>
                This approach allows a nonlinear relationship between the
                measurements and latent states while retaining the fast
                closed-form updates for the posterior. It works particularly
                well when the{" "}
                <MathElt>
                  X<sub>t</sub>
                </MathElt>{" "}
                are much higher dimensional than the{" "}
                <MathElt>
                  Z<sub>t</sub>
                </MathElt>
                 , as is often the case with neural decoding.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Relevant Publications</CardTitle>
              <CardContent style={{ paddingBottom: 0 }}>
                <ul>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <a
                      href="https://doi.org/10.1162/neco_a_01275"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span itemprop="author">
                        M. Burkhart, D. Brandman, B. Franco, L. Hochberg, & M.
                        Harrison.
                      </span>{" "}
                      <i>
                        <span itemprop="name">
                          The Discriminative Kalman Filter for Bayesian
                          Filtering with Nonlinear and Nongaussian Observation
                          Models
                        </span>
                        .{" "}
                      </i>
                      <span
                        itemprop="isPartOf"
                        itemtype="http://schema.org/Periodical"
                      >
                        Neural Computation 32
                      </span>{" "}
                      (<span itemprop="copyrightYear">2020</span>)
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/Thesis">
                    <a
                      href="https://doi.org/10.26300/nhfp-xv22"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span itemprop="author">M. Burkhart.</span> “
                      <span itemprop="name">
                        A Discriminative Approach to Bayesian Filtering with
                        Applications to Human Neural Decoding
                      </span>
                      .” Ph.D. Dissertation,{" "}
                      <span itemprop="sourceOrganization">
                        Brown University
                      </span>{" "}
                      (<span itemprop="copyrightYear">2019</span>)
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <a
                      href="https://doi.org/10.1162/neco_a_01129"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span itemprop="author">
                        D. Brandman, M. Burkhart, J. Kelemen, B. Franco, M.
                        Harrison, & L. Hochberg.
                      </span>{" "}
                      <i>
                        <span itemprop="name">
                          Robust Closed-Loop Control of a Cursor in a Person
                          with Tetraplegia using Gaussian Process Regression
                        </span>
                        .{" "}
                      </i>
                      <span
                        itemprop="isPartOf"
                        itemtype="http://schema.org/Periodical"
                      >
                        Neural Computation 30
                      </span>{" "}
                      (<span itemprop="copyrightYear">2018</span>)
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <a
                      href="https://doi.org/10.1088/1741-2552/aa9ee7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span itemprop="author">
                        D. Brandman, T. Hosman, J. Saab, M. Burkhart, B.
                        Shanahan, J. Ciancibello, et al.
                      </span>{" "}
                      <i>
                        <span itemprop="name">
                          Rapid calibration of an intracortical brain computer
                          interface for people with tetraplegia
                        </span>
                        .{" "}
                      </i>
                      <span
                        itemprop="isPartOf"
                        itemtype="http://schema.org/Periodical"
                      >
                        Journal of Neural Engineering 15
                      </span>{" "}
                      (<span itemprop="copyrightYear">2018</span>)
                    </a>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <a href="static-assets/discriminative_filtering.bib" download>
                  .bib ☜
                </a>
              </CardFooter>
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
                  href="https://www.instagram.com/burkh4rt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={InstagramLogo} alt="Instagram" />
                </a>
                <a
                  href="https://twitter.com/burkh4rt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={TwitterLogo} alt="Twitter" />
                </a>
                <a
                  href="https://orcid.org/0000-0002-2772-5840"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={OrcIDLogo} alt="ORCID" />
                </a>
              </ImgRow>
            </Card>

            <FooterCard>
              <h5 id="cv">
                <a href={CVpdf} target="_blank" rel="noopener noreferrer">
                  {" "}
                  C.V. ☜
                </a>
              </h5>
              <p id="locale">
                © Michael C. Burkhart, {data.site.year}.
                <br />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="svg_icon"
                  width="12"
                  height="16"
                  viewBox="0 0 12 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                  />
                </svg>{" "}
                San José, California
              </p>
            </FooterCard>
          </Deck>
        </Theme>
        <PrintStyle />
      </body>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "profile_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 75) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    site {
      date: buildTime(formatString: "DD/MM/YYYY")
      year: buildTime(formatString: "YYYY")
    }
  }
`
