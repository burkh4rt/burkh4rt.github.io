import React from "react"
import { Link } from "gatsby"

import Theme from "../components/component_theme"
import GlobalReset from "../components/component_normalize"
import Fonts from "../components/fonts"
import PrintStyle from "../components/print"

import {
  DeckThin,
  Card,
  HeaderCard,
  CardContent,
  CardFooter,
  CardTitle,
} from "../components/layouts"

export const Head = () => (
  <>
    <title>publications</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/pubs/" />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <GlobalReset />
        <Fonts />
        <Theme>
          <DeckThin>
            <HeaderCard>
              <h1>Publications</h1>
            </HeaderCard>

            <Card>
              <CardTitle>Journal Articles</CardTitle>
              <CardContent>
                <ul>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart &amp; G. Ruiz.</span>{" "}
                    <a
                      href="https://doi.org/10.1016/j.jocs.2023.102054"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Neuroevolutionary representations for learning
                          heterogeneous treatment effects.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Journal of Computational Science 71
                    </span>{" "}
                    (<span itemprop="copyrightYear">2023</span>){" "}
                    <a
                      href="/pubs/Burkhart-Ruiz-2023-J-Comput-Sci.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
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
                      href="/pubs/Burkhart-2023-Optim-Lett.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4557438"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4557438]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart.</span>{" "}
                    <a
                      href="https://doi.org/10.1017/S0013091522000499"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Conjugacy conditions for supersoluble complements of
                          an abelian base and a fixed point result for
                          non-coprime actions.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Proceedings of the Edinburgh Mathematical Society 65
                    </span>{" "}
                    (<span itemprop="copyrightYear">2022</span>){" "}
                    <a
                      href="/pubs/Burkhart-2022-Proc-Edinburgh-Math-Soc.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4542651"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4542651]
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
                          The Discriminative Kalman Filter for Bayesian
                          Filtering with Nonlinear and Nongaussian Observation
                          Models.
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
                      href="/pubs/Burkhart-et-al-2020-Neural-Comput.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4101168"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4101168]
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
                          Robust Closed-Loop Control of a Cursor in a Person
                          with Tetraplegia using Gaussian Process Regression.
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
                      href="/pubs/Brandman-et-al-2018-Neural-Comput.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=3873814"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR3873814]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      D. Brandman, T. Hosman, J. Saab, M. Burkhart, B. Shanahan,
                      J. Ciancibello, &hellip;, M. Harrison, J. Simeral, &amp;
                      L. Hochberg.
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
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      M. Burkhart, Y. Heo, &amp; V. Zavala.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1016/j.enbuild.2014.01.048"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Measurement and verification of building systems under
                          uncertain data: A Gaussian process modeling approach.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Energy and Buildings 75
                    </span>{" "}
                    (<span itemprop="copyrightYear">2014</span>){" "}
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Conference Proceedings</CardTitle>
              <CardContent>
                <ul>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart &amp; G. Ruiz.</span>{" "}
                    <a
                      href="https://doi.org/10.1007/978-3-031-08754-7_1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Neuroevolutionary Feature Representations for Causal
                          Inference.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Computational Science &ndash; ICCS{" "}
                      <span itemprop="copyrightYear">2022</span>
                    </span>{" "}
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart.</span>{" "}
                    <a
                      href="https://doi.org/10.1007/978-3-030-77964-1_22"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Discriminative Bayesian Filtering for the
                          Semi-supervised Augmentation of Sequential Observation
                          Data.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Computational Science &ndash; ICCS{" "}
                      <span itemprop="copyrightYear">2021</span>
                    </span>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4371656"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4371656]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart &amp; K. Shan.</span>{" "}
                    <a
                      href="https://doi.org/10.1007/978-3-030-50420-5_22"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Deep Low-Density Separation for Semi-supervised
                          Classification.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Computational Science &ndash; ICCS{" "}
                      <span itemprop="copyrightYear">2020</span>
                    </span>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4152505"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4152505]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      M. Burkhart &amp; K. Modarresi.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1007/978-3-030-22741-8_43"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Adaptive Objective Functions and Distance Metrics for
                          Recommendation Systems.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Computational Science &ndash; ICCS{" "}
                      <span itemprop="copyrightYear">2019</span>
                    </span>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=3975427"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR3975427]
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Dissertation</CardTitle>
              <CardContent>
                <ul>
                  <li itemscope itemtype="http://schema.org/Thesis">
                    <span itemprop="author">M. Burkhart.</span>{" "}
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
                    <span itemprop="sourceOrganization">
                      Brown University, Division of Applied Mathematics
                    </span>{" "}
                    (<span itemprop="copyrightYear">2019</span>){" "}
                    <a
                      href="/pubs/Burkhart-2019.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    <a
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4158190"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4158190]
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Patents Pending</CardTitle>
              <CardContent style={{ paddingBottom: 0 }}>
                <ul>
                  <li>
                    M. Burkhart &amp; K. Shan.{" "}
                    <a
                      href="https://patents.google.com/patent/US11455518B2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      User Classification from Data via Deep Segmentation for
                      Semi-supervised Learning.
                    </a>{" "}
                    U.S. Patent Application #16/681,239. Filed 2019. Published
                    as US&thinsp;2021/0142152&thinsp;A1{" "}
                    <a
                      href="/pubs/Burkhart-Shan-US20210142152A1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    Granted 2022 as US&thinsp;11,455,518&thinsp;B2{" "}
                    <a
                      href="/pubs/Burkhart-Shan-US11455518B2.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li>
                    M. Burkhart &amp; K. Modarresi.{" "}
                    <a
                      href="https://patents.google.com/patent/US20200320382A1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Digital Experience Enhancement using an Ensemble Deep
                      Learning Model.
                    </a>{" "}
                    U.S. Patent Application #16/375,627. Filed 2019. Published
                    as US&thinsp;2020/0320382&thinsp;A1{" "}
                    <a
                      href="/pubs/Burkhart-Modarresi-US20200320382A1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Link to="/">home ☜</Link>
              </CardFooter>
            </Card>
          </DeckThin>
        </Theme>
        <PrintStyle />
      </body>
    </>
  )
}
