import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Msvg from "../images/m.svg"
import "../sass/main.scss"

import BayesianGraphicalEqn from "../eqns/bayesian_graphical.svg"
import ChapmanKolmogorovEqn from "../eqns/chapman_kolmogorov.svg"
import DKFGraphicalEqn from "../eqns/dkf_graphical.svg"
import GraphicalModelEqn from "../eqns/graphical_model.svg"
import KalmanGraphicalEqn from "../eqns/kalman_graphical.svg"

import GithubLogo from "../images/github-logo.svg"
import InstagramLogo from "../images/instagram-logo.svg"
import LinkedInLogo from "../images/linkedin-logo.svg"
import OrcIDLogo from "../images/orcid-logo.svg"
import TwitterLogo from "../images/twitter-logo.svg"

import DKFslides from "../pdfs/dkf-slides.pdf"
import CVpdf from "../pdfs/cv19.pdf"

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
          content="Michael Burkhart's home page. Snippets from work and life, with links."
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
          content="Michael Burkhart's home page. Snippets from work and life, with links."
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="burkh4rt" />
        <meta name="twitter:creator" content="burkh4rt" />
        <meta name="twitter:title" content="Michael Burkhart's website" />
        <meta
          name="twitter:description"
          content="Michael Burkhart's home page. Snippets from work and life, with links."
        />
        <meta property="twitter:image" content={Msvg} />
        <meta name="twitter:dnt" content="on" />
        <link rel="me" href="https://twitter.com/burkh4rt" />

        <meta
          name="google-site-verification"
          content="RBomW7izIX8odL5WjXJS01CR5JonJ1lcE3EsTAbVDPk"
        />
        <meta name="yandex-verification" content="fe20013480c99cd5" />
      </Helmet>

      <body>
        <div class="deck">
          <header class="card" id="header">
            <h2>Menagerie</h2>
            <h5>Michael C. Burkhart</h5>
          </header>

          <div class="card">
            <h6 class="title">Hello</h6>
            <p class="content">… and welcome to my website.</p>
          </div>

          <div class="card profile_img" style={{ overflow: "hidden" }}>
            <picture>
              <Img fluid={data.file.childImageSharp.fluid} alt="me" />
            </picture>
          </div>

          <div class="card" id="about-me">
            <h6 class="title">About Me</h6>
            <article
              class="content"
              itemscope
              itemtype="http://schema.org/Person"
            >
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
              <a href="https://doi.org/10.26300/nhfp-xv22">dissertation,</a> I
              derived a novel approach to{" "}
              <span itemprop="knowsAbout">Bayesian filtering</span>, the
              Discriminative Kalman Filter, motivated by and developed with my
              advisor M. Harrison and collaborator D. Brandman. We validated and
              successfully implemented this filter as part of the{" "}
              <span itemprop="affiliation">
                <a href="https://www.braingate.org">BrainGate</a> Clinical Trial
              </span>{" "}
              to enable participants with quadriplegia to communicate and
              interact with their environments in real time using mental imagery
              alone. See slides from my defense <a href={DKFslides}>here.</a>
            </article>
          </div>

          <div class="card" id="filtering">
            <h6 class="title">Filtering</h6>
            <article class="content">
              Suppose there is some underlying process{" "}
              <span class="math_elt">
                Z<sub>1:t</sub>=Z<sub>1</sub>,…,Z<sub>t</sub>
              </span>{" "}
              about which we are very interested, but that we cannot observe.
              Instead, we are sequentially presented with observations or
              measurements{" "}
              <span class="math_elt">
                X<sub>1:t</sub>=X<sub>1</sub>,…,X<sub>t</sub>
              </span>{" "}
              where each{" "}
              <span class="math_elt">
                X<sub>i</sub>
              </span>{" "}
              depends only on the current latent state{" "}
              <span class="math_elt">
                Z<sub>i</sub>
              </span>
               . We visualize this process with the following graph:
              <div class="eqn_svg">
                <img
                  src={GraphicalModelEqn}
                  alt="Graphical Model for Filtering"
                  style={{ width: `calc(257.51 / 319.35 * 95%)` }}
                />
              </div>
              <i>Filtering</i> is the process by which we use the observations{" "}
              <span class="math_elt">
                X<sub>1</sub>,…,X<sub>t</sub>
              </span>{" "}
              to form our best guess for the current latent state{" "}
              <span class="math_elt">
                Z<sub>t</sub>
              </span>
               .
            </article>
          </div>

          <div class="card" id="dynamic-state-space">
            <h6 class="title">Dynamic State Space Models</h6>
            <article class="content">
              Under the Bayesian approach to filtering,{" "}
              <span class="math_elt">
                X<sub>1:t</sub> , Z<sub>1:t</sub>
              </span>{" "}
              are endowed with a joint probability distribution. The graphical
              model encodes the process to generate{" "}
              <span class="math_elt">
                X<sub>1:t</sub> , Z<sub>1:t</sub>
              </span>{" "}
              as:
              <div class="eqn_svg">
                <img
                  src={BayesianGraphicalEqn}
                  alt="Graphical Model with Equations"
                  style={{ width: `calc(302.34 / 319.35 * 95%)` }}
                />
              </div>
              This model is variously known as a <i>dynamic state-space</i> or
              hidden Markov model. It provides a visual description of how to
              generate a sample{" "}
              <span class="math_elt">
                x<sub>1:t</sub> , z<sub>1:t</sub>
              </span>{" "}
              from the random variables{" "}
              <span class="math_elt">
                X<sub>1:t</sub> , Z<sub>1:t</sub>
              </span>
              . We start with{" "}
              <span class="math_elt">
                z<sub>1</sub>
              </span>{" "}
              drawn from its marginal distribution{" "}
              <span class="math_elt">
                p(z<sub>1</sub>)
              </span>
              . We then generate an observation{" "}
              <span class="math_elt">
                x<sub>1</sub>
              </span>{" "}
              using the distribution{" "}
              <span class="math_elt" style={{ color: `#046a38` }}>
                p(x<sub>1</sub>|z<sub>1</sub>)
              </span>
              . At each subsequent time step <span class="math_elt">t</span>, we
              draw{" "}
              <span class="math_elt">
                z<sub>t</sub>
              </span>{" "}
              from the distribution{" "}
              <span class="math_elt" style={{ color: `#003c71` }}>
                p(z<sub>t</sub>|z<sub>t-1</sub>)
              </span>{" "}
              and{" "}
              <span class="math_elt">
                x<sub>t</sub>
              </span>{" "}
              from the distribution{" "}
              <span class="math_elt" style={{ color: `#046a38` }}>
                p(x<sub>t</sub>|z<sub>t</sub>)
              </span>
              . These two conditional distributions are very important and
              characterize the generative process up to the specification of{" "}
              <span class="math_elt">
                {" "}
                Z<sub>1</sub>
              </span>
              . The first,{" "}
              <span class="math_elt" style={{ color: `#003c71` }}>
                p(z<sub>t</sub>|z<sub>t-1</sub>)
              </span>
              , relates the state at time <span class="math_elt">t</span> to the
              state at time <span class="math_elt">t-1</span> and is often
              called the{" "}
              <span style={{ color: `#003c71` }}>
                state or prediction model
              </span>
              . The second,{" "}
              <span class="math_elt" style={{ color: `#046a38` }}>
                p(x<sub>t</sub>|z<sub>t</sub>)
              </span>
              , relates the current observation to the current state and is
              called the{" "}
              <span style={{ color: `#046a38` }}>
                measurement or observation model
              </span>
              .
            </article>
          </div>

          <div class="card" id="bayesian-filtering">
            <h6 class="title">Bayesian Filtering</h6>
            <article class="content">
              The <i>Bayesian</i> solution to the filtering problem returns the
              conditional distribution of{" "}
              <span class="math_elt">
                Z<sub>t</sub>
              </span>{" "}
              given that{" "}
              <span class="math_elt">
                X<sub>1</sub> ,…, X<sub>t</sub>
              </span>{" "}
              have been observed to be{" "}
              <span class="math_elt">
                x<sub>1</sub> ,…, x<sub>t</sub>
              </span>
               . We refer to this distribution{" "}
              <span class="math_elt" style={{ color: `#ed1c24` }}>
                p(z<sub>t</sub>|x<sub>1:t</sub>)
              </span>{" "}
              as the <span style={{ color: `#ed1c24` }}>posterior</span>. The
              Chapman–Kolmogorov recursion
              <div class="eqn_svg">
                <img
                  src={ChapmanKolmogorovEqn}
                  alt="Chapman–Kolmogorov Equation"
                  style={{ width: `calc(319.35 / 319.35 * 95%)` }}
                />
              </div>
              relates the <span style={{ color: `#ed1c24` }}>posterior</span> at
              time <span class="math_elt">t</span> to the one at time{" "}
              <span class="math_elt">t-1</span>. Bayesian filtering solves or
              approximates the above integral. Common approaches include Kalman
              filtering, variational methods, quadrature methods, and Monte
              Carlo-based particle filtering.
            </article>
          </div>

          <div class="card" id="kalman-filter">
            <h6 class="title">Kalman Filter</h6>
            <article class="content">
              The <i>Kalman</i> filter specifies both the{" "}
              <span style={{ color: `#003c71` }}>state model</span> and{" "}
              <span style={{ color: `#046a38` }}>measurement model</span> as
              linear, Gaussian.
              <div class="eqn_svg">
                <img
                  src={KalmanGraphicalEqn}
                  alt="Kalman Graphical Model"
                  style={{ width: `calc(222.52 / 319.35 * 95%)` }}
                />
              </div>
              Here,{" "}
              <span class="math_elt">
                η<sub>d</sub>(· ; μ ,Σ)
              </span>{" "}
              denotes the <span class="math_elt">d</span>-dimensional Gaussian
              density with mean <span class="math_elt">μ</span> and covariance{" "}
              <span class="math_elt" lang="el">
                Σ
              </span>
              . In this way, the{" "}
              <span style={{ color: `#ed1c24` }}>posterior</span> is Gaussian
              and quickly computable. NASA used a variant of this filter to
              orient the Apollo Lunar Module and land the first humans on the
              moon.
            </article>
          </div>

          <div class="card" id="discriminative-kalman-filter">
            <h6 class="title">Our Approach</h6>
            <article class="content">
              We apply Bayes' rule to the{" "}
              <span style={{ color: `#046a38` }}>measurement model</span> and
              make the Gaussian approximation{" "}
              <span class="math_elt" style={{ color: `#046a38` }}>
                p(z<sub>t</sub>|x<sub>t</sub>) ≈ η
                <sub>d</sub>(z<sub>t</sub> ; f(x<sub>t</sub>
                ), Q(x<sub>t</sub>))
              </span>{" "}
              where the functions <span class="math_elt">f</span> and{" "}
              <span class="math_elt">Q</span> can be learned from data.
              <div class="eqn_svg">
                <img
                  src={DKFGraphicalEqn}
                  alt="Discriminative Kalman Filter Graphical Model"
                  style={{ width: `calc(259.88 / 319.35 * 95%)` }}
                />
              </div>
              This approach allows a nonlinear relationship between the
              measurements and latent states while retaining the fast
              closed-form updates for the posterior. It works particularly well
              when the{" "}
              <span class="math_elt">
                X<sub>t</sub>
              </span>{" "}
              are much higher dimensional than the{" "}
              <span class="math_elt">
                Z<sub>t</sub>
              </span>
               , as is often the case with neural decoding.
            </article>
          </div>

          <div class="card" id="publications">
            <h6 class="title">Relevant Publications</h6>
            <article class="content">
              <ul>
                <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                  <a
                    href="https://doi.org/10.1162/neco_a_01275"
                    target="_blank"
                    rel="noopener"
                  >
                    <span itemprop="author">
                      M. Burkhart, D. Brandman, B. Franco, L. Hochberg, & M.
                      Harrison.
                    </span>{" "}
                    <i>
                      <span itemprop="name">
                        The Discriminative Kalman Filter for Bayesian Filtering
                        with Nonlinear and Nongaussian Observation Models
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
                    rel="noopener"
                  >
                    <span itemprop="author">M. Burkhart.</span> “
                    <span itemprop="name">
                      A Discriminative Approach to Bayesian Filtering with
                      Applications to Human Neural Decoding
                    </span>
                    .” Ph.D. Dissertation,{" "}
                    <span itemprop="sourceOrganization">Brown University</span>{" "}
                    (<span itemprop="copyrightYear">2019</span>)
                  </a>
                </li>
                <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                  <a
                    href="https://doi.org/10.1162/neco_a_01129"
                    target="_blank"
                    rel="noopener"
                  >
                    <span itemprop="author">
                      D. Brandman, M. Burkhart, J. Kelemen, B. Franco, M.
                      Harrison, & L. Hochberg.
                    </span>{" "}
                    <i>
                      <span itemprop="name">
                        Robust Closed-Loop Control of a Cursor in a Person with
                        Tetraplegia using Gaussian Process Regression
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
                    rel="noopener"
                  >
                    <span itemprop="author">
                      D. Brandman, T. Hosman, J. Saab, M. Burkhart, B. Shanahan,
                      J. Ciancibello, et al.
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
            </article>
          </div>

          <div class="card" id="find-me">
            <h6 class="title">Find Me Online</h6>
            <div
              class="img_row content"
              style={{ paddingTop: 0, borderRadius: 0 }}
            >
              <a
                href="https://www.linkedin.com/in/burkh4rt/"
                target="_blank"
                rel="noopener"
              >
                <img src={LinkedInLogo} alt="LinkedIn" />
              </a>
              <a
                href="https://github.com/burkh4rt/"
                target="_blank"
                rel="noopener"
              >
                <img src={GithubLogo} alt="GitHub" />
              </a>
              <a
                href="https://www.instagram.com/burkh4rt/"
                target="_blank"
                rel="noopener"
              >
                <img src={InstagramLogo} alt="Instagram" />
              </a>
              <a
                href="https://twitter.com/burkh4rt"
                target="_blank"
                rel="noopener"
              >
                <img src={TwitterLogo} alt="Twitter" />
              </a>
              <a
                href="https://orcid.org/0000-0002-2772-5840"
                target="_blank"
                rel="noopener"
              >
                <img src={OrcIDLogo} alt="ORCID" />
              </a>
            </div>
          </div>

          <footer class="card" id="footer">
            <h5 id="cv">
              <a href={CVpdf} target="_blank" rel="noopener">
                {" "}
                C.V. ☜
              </a>
            </h5>
            <p id="locale">
              © Michael C. Burkhart, 2020.
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
          </footer>
        </div>
      </body>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "profile_img.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
