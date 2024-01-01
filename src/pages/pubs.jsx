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
    <html lang="en" />
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
                      href="https://mathscinet.ams.org/mathscinet-getitem?mr=4542651"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [MR4542651]
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-2022-Proc-Edinb-Math-Soc.pdf"
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
                          Neuroevolutionary feature representations for causal
                          inference.
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
                    <a
                      href="/pubs/Burkhart-Ruiz-2022-Comput-Sci.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
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
                          Discriminative Bayesian filtering for the
                          semi-supervised augmentation of sequential observation
                          data.
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
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-2021-Comput-Sci.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
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
                          Deep low-density separation for semi-supervised
                          classification.
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
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-Shan-2020-Comput-Sci.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
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
                          Adaptive objective functions and distance metrics for
                          recommendation systems.
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
                    </a>{" "}
                    <a
                      href="/pubs/Burkhart-Modarresi-2019-Comput-Sci.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Preprints</CardTitle>
              <CardContent>
                <ul>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">M. Burkhart.</span>{" "}
                    <a
                      href="https://doi.org/10.1017/prm.2023.96"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Fixed point conditions for non-coprime actions.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Proceedings of the Royal Society of Edinburgh Section A:
                      Mathematics
                    </span>{" "}
                    (to appear){" "}
                    <a
                      href="/pubs/Burkhart-2023-Proc-Roy-Soc-Edinb-Sect-A-Math.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      M. Abroshan, M. Burkhart, O. Giles, S. Greenbury, Z.
                      Kourtzi, J. Roberts, M. van der Schaar, J. Steyn, A.
                      Wilson, &amp; M. Yong.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.48550/arXiv.2303.01513"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Safe AI for health and beyond &ndash; monitoring to
                          transform a health service.
                        </span>
                      </i>
                    </a>{" "}
                    <a
                      href="https://arxiv.org/abs/2303.01513"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [arXiv:2303.01513]
                    </a>{" "}
                    <a
                      href="/pubs/Abroshan-et-al-2023-arXiv.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      R. Li, E. Harshfield, S. Bell, M. Burkhart, A. Tuladhar,
                      S. Hilal, D. Tozer, F. Chappell, S. Makin, J. Lo, J.
                      Wardlaw, F.-E. de Leeuw, C. Chen, Z. Kourtzi, &amp; H.
                      Markus.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1016/j.cccb.2023.100179"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Predicting incident dementia in cerebral small vessel
                          disease: comparison of machine learning and
                          traditional statistical models.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Cerebral Circulation &ndash; Cognition and Behavior
                    </span>{" "}
                    (to appear){" "}
                    <a
                      href="/pubs/Li-et-al-2023-Cereb-Circ-Cogn-Behav.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li itemscope itemtype="http://schema.org/ScholarlyArticle">
                    <span itemprop="author">
                      R. Borchert, T. Azevedo, A. Badhwar, J. Bernal, M. Betts,
                      R. Bruffaerts, M. Burkhart, I. Dewachter, &hellip;, D.
                      Llewellyn, M. Veldsman, &amp; T. Rittman.
                    </span>{" "}
                    <a
                      href="https://doi.org/10.1002/alz.13412"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>
                        <span itemprop="name">
                          Artificial intelligence for diagnostic and prognostic
                          neuroimaging in dementia: a systematic review.
                        </span>
                      </i>
                    </a>{" "}
                    <span
                      itemprop="isPartOf"
                      itemtype="http://schema.org/Periodical"
                    >
                      Alzheimer's &amp; Dementia
                    </span>{" "}
                    (to appear){" "}
                    <a
                      href="/pubs/Borchert-et-al-2023-Alzheimers-Dement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
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
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardTitle>Patents &amp; Pending</CardTitle>
              <CardContent style={{ paddingBottom: 0 }}>
                <ul>
                  <li>
                    M. Burkhart &amp; G. Ruiz.{" "}
                    <a
                      href="https://patents.google.com/patent/US20230376776A1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Causal inference via neuroevolutionary selection.
                    </a>{" "}
                    U.S. Patent Application #17/748,891. Filed 2022. Published
                    as US&thinsp;2023/0376776&thinsp;A1{" "}
                    <a
                      href="/pubs/Burkhart-Ruiz-US20230376776A1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>
                  </li>
                  <li>
                    M. Burkhart &amp; K. Shan.{" "}
                    <a
                      href="https://patents.google.com/patent/US11455518B2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      User classification from data via deep segmentation for
                      semi-supervised learning.
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
                      href="https://patents.google.com/patent/US11816562B2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Digital experience enhancement using an ensemble deep
                      learning model.
                    </a>{" "}
                    U.S. Patent Application #16/375,627. Filed 2019. Published
                    as US&thinsp;2020/0320382&thinsp;A1{" "}
                    <a
                      href="/pubs/Burkhart-Modarresi-US20200320382A1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      [pdf]
                    </a>{" "}
                    Granted 2023 as US&thinsp;11,816,562&thinsp;B2{" "}
                    <a
                      href="/pubs/Burkhart-Modarresi-US11816562B2.pdf"
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
