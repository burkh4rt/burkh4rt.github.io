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
  MathLine,
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
import GoogleScholarLogo from "../logos/google-scholar.svg"
import OrcIDLogo from "../logos/orcid-logo.svg"
import TwitterLogo from "../logos/twitter-logo.svg"

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
      content="Michael Burkhart, Michael C. Burkhart, Ph.D., Brown University, Applied Mathematics, Bayesian Filtering, neural decoding, Discriminative Kalman Filter, University of Cambridge"
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

    <script type="application/ld+json">
      {`
        {
          "@context": "http://schema.org/",
          "@graph": [
            {
              "@type": "Person",
              "name": "Michael C. Burkhart",
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
                "https://x.com/burkh4rt",
                "https://mathstodon.xyz/@burkh4rt",
                "https://www.facebook.com/burkh4rt",
                "https://burkh4rt.tumblr.com",
                "https://gravatar.com/burkh4rt",
                "https://orcid.org/0000-0002-2772-5840",
                "https://www.genealogy.math.ndsu.nodak.edu/id.php?id=246430",
                "https://www.scopus.com/authid/detail.uri?authorId=56094628500",
                "https://mathscinet.ams.org/mathscinet/MRAuthorID/1296691",
                "https://publons.com/researcher/2926384/michael-c-burkhart",
                "https://profiles.impactstory.org/u/0000-0002-2772-5840",
                "https://figshare.com/authors/Michael_C_Burkhart/6643982",
                "https://dblp.uni-trier.de/pid/223/5859.html",
                "https://dl.acm.org/profile/99659347035",
                "https://www.scienceopen.com/user/burkh4rt",
                "https://scholar.google.com/citations?user=OcFnA0UAAAAJ",
                "https://academictree.org/math/peopleinfo.php?pid=784634",
                "https://www.semanticscholar.org/author/Michael-C.-Burkhart/48820417",
                "https://osf.io/9qvh7",
                "https://www.wikidata.org/wiki/Q60057814",
                "https://scholia.toolforge.org/author/Q60057814",
                "https://europepmc.org/authors/0000-0002-2772-5840",
                "https://www.lens.org/lens/profile/326252578",
                "https://zbmath.org/authors/?q=ai%3Aburkhart.michael-c",
                "https://g.co/kgs/XiBzFy",
                "https://isni.org/isni/0000000502720308",
                "https://viaf.org/viaf/439162664218455000792",
                "https://app.dimensions.ai/details/entities/publication/author/ur.010351326437.47",
                "https://www.c2d3.cam.ac.uk/directory/16451/michael-burkhart",
                "https://neuroscience.cam.ac.uk/member/burkh4rt/",
                "https://www.abg.psychol.cam.ac.uk/staff/dr-michael-burkhart",
                "https://gitlab.developers.cam.ac.uk/mcb93",
                "https://mcb93.user.srcf.net",
                "https://arxiv.org/a/burkhart_m_2.html",
                "https://www.last.fm/user/burkh4rt",
                "https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=5871438",
                "https://aminer.cn/profile/62e47ef4d9f204418d68e981",
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
                "https://imgur.com/user/burkh4rt",
                "https://bsky.app/profile/burkh4rt.bsky.social",
                "https://archive.org/details/@burkh4rt?tab=web-archive",
                "https://www.behance.net/burkh4rt"
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
                "https://www.zenodo.org/record/3686561",
                "https://hal.archives-ouvertes.fr/tel-03037117/",
                "https://search.proquest.com/openview/5225fc3dc50c59e4a077addf02928a08",
                "https://mathscinet.ams.org/mathscinet-getitem?mr=4158190"
              ]
            }
          ]
        }
      `}
    </script>
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
            <HeaderCard>
              <h1>Michael C. Burkhart</h1>
            </HeaderCard>

            <Card>
              <CardTitle>Hello</CardTitle>
              <CardContent>… and welcome to my website.</CardContent>
            </Card>

            <MediaCard>
              <GatsbyImage
                image={data.file.childImageSharp.gatsbyImageData}
                alt="Michael C. Burkhart"
              />
            </MediaCard>

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
                <a href="https://doi.org/10.26300/nhfp-xv22">dissertation</a>, I
                derived a novel approach to{" "}
                <span itemprop="knowsAbout">Bayesian filtering</span>, the
                Discriminative Kalman Filter, motivated by and developed with my
                advisor M. Harrison and collaborators D. Brandman and L.
                Hochberg. We validated and successfully implemented this filter
                as part of the{" "}
                <span itemprop="affiliation">
                  <a href="https://www.braingate.org">BrainGate</a> Clinical
                  Trial
                </span>{" "}
                that enables participants with quadriplegia to communicate and
                interact with their environments in real time using mental
                imagery alone. <br />I then spent three years working as a
                machine learning scientist at Adobe in California. In 2021, I
                joined Cambridge University as a research associate to develop
                machine learning-based approaches for the early diagnosis of
                neurodegenerative disease.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Filtering</CardTitle>
              <CardContent>
                Suppose there is some underlying process{" "}
                <MathElt>
                  Z<sub>1:t</sub>=Z<sub>1</sub>,…,Z
                  <sub>t</sub>
                </MathElt>{" "}
                about which we are very interested, but that we cannot observe.
                Instead, we are sequentially presented with observations or
                measurements{" "}
                <MathElt>
                  X<sub>1:t</sub>=X<sub>1</sub>,…,X
                  <sub>t</sub>
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
                    style={{ height: `calc(51em/10)` }}
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
                    style={{ height: `calc(86.19em/15)` }}
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
                  p(x<sub>t</sub>|z<sub>t</sub> )
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
                as the <TextRed>posterior distribution</TextRed>, or simply the{" "}
                <TextRed>posterior</TextRed>. The Chapman–Kolmogorov recursion
                <EqnSVG>
                  <img
                    src={ChapmanKolmogorovEqn}
                    alt="Chapman–Kolmogorov Equation"
                    style={{ height: `calc(84.81em/15)` }}
                  />
                </EqnSVG>
                relates the <TextRed>posterior</TextRed> at time{" "}
                <MathElt>t</MathElt> to the one at time <MathElt>t-1</MathElt>.
                Bayesian filtering solves or approximates the above recursion.
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
                    style={{ height: `calc(87.19em/15)` }}
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

            <Card style={{ breakBefore: `column` }}>
              <CardTitle>Our Approach</CardTitle>
              <CardContent>
                We apply Bayes' rule to the{" "}
                <TextGreen>measurement model</TextGreen> and make the Gaussian
                approximation{" "}
                <MathEltGreen>
                  p(z<sub>t</sub>|x<sub>t</sub> ) ≈ η
                  <sub>d</sub>(z<sub>t</sub> ; f(x<sub>t</sub>
                   ), Q(x<sub>t</sub> ))
                </MathEltGreen>{" "}
                where the functions <MathElt>f</MathElt> and{" "}
                <MathElt>Q</MathElt> can be learned from data.
                <EqnSVG>
                  <img
                    src={DKFGraphicalEqn}
                    alt="Discriminative Kalman Filter Graphical Model"
                    style={{ height: `calc(87.19em/15)` }}
                  />
                </EqnSVG>
                This approach allows for a nonlinear relationship between the
                measurements and latent states and has been found to perform
                particularly well when the{" "}
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
              <CardTitle>Discriminative Kalman Filter</CardTitle>
              <CardContent>
                The <i>Discriminative Kalman Filter</i> adopts the Kalman{" "}
                <TextNavy>state model</TextNavy>
                {", "}
                <MathEltNavy>
                  p(z<sub>t</sub>|z<sub>t-1</sub>) = η<sub>d</sub>(z<sub>t</sub>
                   ; Az<sub>t-1</sub>, Γ)
                </MathEltNavy>
                {", "}
                with initialization{" "}
                <MathEltNavy>
                  p(z<sub>0</sub>) = η<sub>d</sub>(z
                  <sub>0</sub>; 0, S)
                </MathEltNavy>{" "}
                where <MathElt>S</MathElt> satisfies <MathElt>S=ASA'+Γ</MathElt>{" "}
                (so that the latent process is stationary) and uses the{" "}
                <TextGreen>measurement model</TextGreen> introduced above. Given
                these specifications, it follows that we may recursively
                approximate the <TextRed>posterior</TextRed> as Gaussian.
                Namely, if
                <MathLine>
                  <MathEltRed>
                    p(z<sub>t-1</sub>|x<sub>1:t-1</sub>) ≈ η<sub>d</sub>(z
                    <sub>t-1</sub> ; μ<sub>t-1</sub>, Σ
                    <sub>t-1</sub>),
                  </MathEltRed>
                </MathLine>
                then given a new observation{" "}
                <MathElt>
                  X<sub>t</sub>=x<sub>t</sub>
                </MathElt>
                , we have that
                <MathLine>
                  <MathEltRed>
                    p(z<sub>t</sub>|x<sub>1:t</sub> ) ≈ η<sub>d</sub>(z
                    <sub>t</sub> ; μ<sub>t</sub> , Σ
                    <sub>t</sub> )
                  </MathEltRed>
                </MathLine>
                where
                <MathLine>
                  <MathElt>
                    M<sub>t</sub> = AΣ<sub>t-1</sub>A' + Γ,
                  </MathElt>
                </MathLine>
                <MathLine>
                  <MathElt>
                    Σ<sub>t</sub> = (M<sub>t</sub>
                    <sup>-1</sup> + Q(x<sub>t</sub> )
                    <sup>-1</sup> - S<sup>-1</sup>)<sup>-1</sup>,
                  </MathElt>
                </MathLine>
                <MathLine>
                  <MathElt>
                    μ<sub>t</sub> = Σ<sub>t</sub>(M
                    <sub>t</sub>
                    <sup>-1</sup>Aμ<sub>t-1</sub> + Q(x
                    <sub>t</sub> )
                    <sup>-1</sup>f(x<sub>t</sub>)).
                  </MathElt>
                </MathLine>
                This approximation is functionally exact when{" "}
                <MathElt>
                  Q(x<sub>t</sub> )<sup>-1</sup> - S<sup> -1</sup>
                </MathElt>{" "}
                is positive-definite; otherwise we let
                <MathLine>
                  <MathElt>
                    Σ<sub>t</sub> = (M<sub>t</sub>
                    <sup>-1</sup> + Q(x<sub>t</sub> )
                    <sup>-1</sup>)<sup>-1</sup>.
                  </MathElt>
                </MathLine>
                In this way, the Discriminative Kalman Filter maintains fast,
                closed-form updates while allowing for a nonlinear relationship
                between the latent states and observations. When supervised
                training data is available, off-the-shelf
                nonlinear/nonparameteric regression tools can readily be used to
                learn the discriminatively specified observation model. In
                related work, we demonstrate how this framework can also be
                leveraged to ameliorate non-stationarities, or changes to the
                relationship between the latent states and observations, and
                increase the robustness of estimates.
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Relevant Publications</CardTitle>
              <CardContent style={{ paddingBottom: 0 }}>
                <ul>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart.</span>{" "}
                    <a
                      href="https://doi.org/10.1007/s11590-022-01895-5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Discriminative Bayesian filtering lends momentum to
                          the stochastic Newton method for minimizing log-convex
                          functions.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Optimization Letters 17
                    </span>{" "}
                    (<span itemprop="copyrightYear">2023</span>){" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4557438"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4557438]
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-2023-Optim-Lett.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      M. Burkhart, D. Brandman, B. Franco, L. Hochberg, &amp; M.
                      Harrison.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1162/neco_a_01275"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          The discriminative Kalman filter for Bayesian
                          filtering with nonlinear and nongaussian observation
                          models.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Neural Computation 32
                    </span>{" "}
                    (<span itemprop="copyrightYear">2020</span>){" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4101168"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4101168]
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-et-al-2020-Neural-Comput.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/Thesis">
                    <span itemprop="author">M. Burkhart.</span>
                    <a
                      href="https://doi.org/10.26300/nhfp-xv22"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      “
                      <span itemprop="name">
                        A Discriminative Approach to Bayesian Filtering with
                        Applications to Human Neural Decoding
                      </span>
                      .”
                    </a>{" "}
                    Ph.D. Dissertation,{" "}
                    <span itemprop="sourceOrganization">Brown University</span>{" "}
                    (<span itemprop="copyrightYear">2019</span>){" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4158190"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4158190]
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      D. Brandman, M. Burkhart, J. Kelemen, B. Franco, M.
                      Harrison, &amp; L. Hochberg.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1162/neco_a_01129"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Robust closed-loop control of a cursor in a person
                          with tetraplegia using Gaussian process regression.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Neural Computation 30
                    </span>{" "}
                    (<span itemprop="copyrightYear">2018</span>){" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=3873814"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR3873814]
                    </a>{" "}
                    <a
                      href="/pubs/Brandman-et-al-2018-Neural-Comput.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      D. Brandman, T. Hosman, J. Saab, M. Burkhart, B. Shanahan,
                      J. Ciancibello, et al.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1088/1741-2552/aa9ee7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Rapid calibration of an intracortical brain computer
                          interface for people with tetraplegia.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Journal of Neural Engineering 15
                    </span>{" "}
                    (<span itemprop="copyrightYear">2018</span>){" "}
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/pubs">more ☜</Link>
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
              </ImgRow>
            </Card>

            <FooterCard>
              <h5 id="cv">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  {" "}
                  C.V. ☜
                </a>
              </h5>
              <p id="locale">© Michael C. Burkhart, {data.site.year}</p>
            </FooterCard>
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
          width: 700
          quality: 85
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
