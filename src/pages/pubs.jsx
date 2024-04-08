import React from "react"

import {
  Breadcrumbs,
  Link,
  Octicon,
  Pagehead,
  Text,
  SubNav,
  ThemeProvider,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react"

import { LinkExternalIcon, LocationIcon } from "@primer/octicons-react"

import { customTheme } from "../styles/theme"
import Fonts from "../styles/fonts"

export const Head = () => (
  <>
    <html lang="en" />
    <title>publications</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/pubs" />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <Fonts />
        <ThemeProvider
          theme={customTheme}
          dayScheme="light"
          nightScheme="dark_dimmed"
        >
          <BaseStyles>
            <SplitPageLayout>
              <SplitPageLayout.Header>
                <Breadcrumbs>
                  <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
                  <Breadcrumbs.Item href="#" selected>
                    publications
                  </Breadcrumbs.Item>
                </Breadcrumbs>
              </SplitPageLayout.Header>

              <SplitPageLayout.Content
                sx={{
                  ul: {
                    listStyle: `none`,
                    marginLeft: 0,
                  },
                  li: {
                    paddingLeft: `1em`,
                    textIndent: `-1em`,
                    paddingBottom: `0.5em`,
                    maxWidth: `calc(max(75%,500px))`,
                  },
                }}
              >
                <Pagehead as="h3">Journal Articles</Pagehead>

                <Text>
                  <ul>
                    <li>
                      M. Burkhart &amp; G. Ruiz.{" "}
                      <Link
                        href="https://doi.org/10.1016/j.jocs.2023.102054"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Neuroevolutionary representations for learning
                        heterogeneous treatment effects.
                      </Link>{" "}
                      Journal of Computational Science 71 (2023){" "}
                      <Link
                        href="/pubs/Burkhart-Ruiz-2023-J-Comput-Sci.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart{" "}
                      <Link
                        href="https://doi.org/10.1007/s11590-022-01895-5"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Discriminative Bayesian filtering lends momentum to the
                        stochastic Newton method for minimizing log-convex
                        functions.
                      </Link>{" "}
                      Optimization Letters 17 (2023){" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=4557438"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR4557438&nbsp;
                        <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-2023-Optim-Lett.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart{" "}
                      <Link
                        href="https://doi.org/10.1017/S0013091522000499"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Conjugacy conditions for supersoluble complements of an
                        abelian base and a fixed point result for non-coprime
                        actions.
                      </Link>{" "}
                      Proceedings of the Edinburgh Mathematical Society 65
                      (2022){" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=4542651"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR4542651&nbsp;
                        <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-2022-Proc-Edinb-Math-Soc.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart, D. Brandman, B. Franco, L. Hochberg, &amp; M.
                      Harrison.{" "}
                      <Link
                        href="https://doi.org/10.1162/neco_a_01275"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        The discriminative Kalman filter for Bayesian filtering
                        with nonlinear and nongaussian observation models.
                      </Link>{" "}
                      Neural Computation 32 (2020){" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=4101168"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR4101168&nbsp;
                        <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-et-al-2020-Neural-Comput.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      D. Brandman, M. Burkhart, J. Kelemen, B. Franco, M.
                      Harrison, &amp; L. Hochberg.{" "}
                      <Link
                        href="https://doi.org/10.1162/neco_a_01129"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Robust closed-loop control of a cursor in a person with
                        tetraplegia using Gaussian process regression.
                      </Link>{" "}
                      Neural Computation 30 (2018){" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=3873814"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR3873814&nbsp;
                        <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Brandman-et-al-2018-Neural-Comput.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      D. Brandman, T. Hosman, J. Saab, M. Burkhart, B. Shanahan,
                      J. Ciancibello, &hellip;, M. Harrison, J. Simeral, &amp;
                      L. Hochberg.{" "}
                      <Link
                        href="https://doi.org/10.1088/1741-2552/aa9ee7"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Rapid calibration of an intracortical brain computer
                        interface for people with tetraplegia.
                      </Link>{" "}
                      Journal of Neural Engineering 15 (2018){" "}
                      <Link
                        href="/pubs/Brandman-et-al-2018-J-Neural-Eng.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart, Y. Heo, &amp; V. Zavala.{" "}
                      <Link
                        href="https://doi.org/10.1016/j.enbuild.2014.01.048"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Measurement and verification of building systems under
                        uncertain data: A Gaussian process modeling approach.
                      </Link>{" "}
                      Energy and Buildings 75 (2014){" "}
                      <Link
                        href="/pubs/Burkhart-et-al-2014-Energy-Build.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>
                  </ul>
                </Text>

                <Pagehead as="h3">Conference Proceedings</Pagehead>
                <Text>
                  <ul>
                    <li>
                      M. Burkhart &amp; G. Ruiz.{" "}
                      <Link
                        href="https://doi.org/10.1007/978-3-031-08754-7_1"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Neuroevolutionary feature representations for causal
                        inference.
                      </Link>{" "}
                      Computational Science &ndash; ICCS 2022{" "}
                      <Link
                        href="/pubs/Burkhart-Ruiz-2022-Comput-Sci.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart.{" "}
                      <Link
                        href="https://doi.org/10.1007/978-3-030-77964-1_22"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Discriminative Bayesian filtering for the
                        semi-supervised augmentation of sequential observation
                        data.
                      </Link>{" "}
                      Computational Science &ndash; ICCS 2021{" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=4371656"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR4371656 <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-2021-Comput-Sci.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart &amp; K. Shan.{" "}
                      <Link
                        href="https://doi.org/10.1007/978-3-030-50420-5_22"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Deep low-density separation for semi-supervised
                        classification.
                      </Link>{" "}
                      Computational Science &ndash; ICCS 2020{" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=4152505"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR4152505 <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-Shan-2020-Comput-Sci.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart &amp; K. Modarresi.{" "}
                      <Link
                        href="https://doi.org/10.1007/978-3-030-22741-8_42"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Determining Adaptive Loss Functions and Algorithms for
                        Predictive Models.
                      </Link>{" "}
                      Computational Science &ndash; ICCS 2019{" "}
                      <Link
                        href="/pubs/Burkhart-Modarresi-2019-Comput-Sci-2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart &amp; K. Modarresi.{" "}
                      <Link
                        href="https://doi.org/10.1007/978-3-030-22741-8_43"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Adaptive objective functions and distance metrics for
                        recommendation systems.
                      </Link>{" "}
                      Computational Science &ndash; ICCS 2019{" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=3975427"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR3975427 <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-Modarresi-2019-Comput-Sci.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>
                  </ul>
                </Text>
                <Pagehead as="h3">Preprints</Pagehead>
                <Text>
                  <ul>
                    <li>
                      M. Burkhart.{" "}
                      <Link
                        href="https://doi.org/10.1017/prm.2023.96"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Fixed point conditions for non-coprime actions.
                      </Link>{" "}
                      Proceedings of the Royal Society of Edinburgh Section A:
                      Mathematics (to appear){" "}
                      <Link
                        href="/pubs/Burkhart-2023-Proc-Roy-Soc-Edinb-Sect-A-Math.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Abroshan, M. Burkhart, O. Giles, S. Greenbury, Z.
                      Kourtzi, J. Roberts, M. van der Schaar, J. Steyn, A.
                      Wilson, &amp; M. Yong.{" "}
                      <Link
                        href="https://doi.org/10.48550/arXiv.2303.01513"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Safe AI for health and beyond &ndash; monitoring to
                        transform a health service.
                      </Link>{" "}
                      arXiv:2303.01513{" "}
                      <Link
                        href="/pubs/Abroshan-et-al-2023-arXiv.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      R. Li, E. Harshfield, S. Bell, M. Burkhart, A. Tuladhar,
                      S. Hilal, D. Tozer, F. Chappell, S. Makin, J. Lo, J.
                      Wardlaw, F.-E. de Leeuw, C. Chen, Z. Kourtzi, &amp; H.
                      Markus.{" "}
                      <Link
                        href="https://doi.org/10.1016/j.cccb.2023.100179"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Predicting incident dementia in cerebral small vessel
                        disease: comparison of machine learning and traditional
                        statistical models.
                      </Link>{" "}
                      Cerebral Circulation &ndash; Cognition and Behavior{" "}
                      <Link
                        href="/pubs/Li-et-al-2023-Cereb-Circ-Cogn-Behav.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      R. Borchert, T. Azevedo, A. Badhwar, J. Bernal, M. Betts,
                      R. Bruffaerts, M. Burkhart, I. Dewachter, &hellip;, D.
                      Llewellyn, M. Veldsman, &amp; T. Rittman.{" "}
                      <Link
                        href="https://doi.org/10.1002/alz.13412"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Artificial intelligence for diagnostic and prognostic
                        neuroimaging in dementia: a systematic review.
                      </Link>{" "}
                      Alzheimer's &amp; Dementia{" "}
                      <Link
                        href="/pubs/Borchert-et-al-2023-Alzheimers-Dement.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>
                  </ul>
                </Text>

                <Pagehead as="h3">Dissertation</Pagehead>
                <Text>
                  <ul>
                    <li>
                      M. Burkhart.{" "}
                      <Link
                        href="https://doi.org/10.26300/nhfp-xv22"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        “A Discriminative Approach to Bayesian Filtering with
                        Applications to Human Neural Decoding.”
                      </Link>{" "}
                      Ph.D. Dissertation, Brown University, Division of Applied
                      Mathematics (2019){" "}
                      <Link
                        href="https://mathscinet.ams.org/mathscinet-getitem?mr=4158190"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        MR4158190&nbsp;
                        <LinkExternalIcon />
                      </Link>{" "}
                      <Link
                        href="/pubs/Burkhart-2019.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>
                  </ul>

                  <Pagehead as="h3">Patents &amp; Pending</Pagehead>
                  <ul>
                    <li>
                      M. Burkhart &amp; G. Ruiz.{" "}
                      <Link
                        href="https://patents.google.com/patent/US20230376776A1"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Causal inference via neuroevolutionary selection.
                      </Link>{" "}
                      U.S. Patent Application #17/748,891. Filed 2022. Published
                      as US&thinsp;2023/0376776&thinsp;A1{" "}
                      <Link
                        href="/pubs/Burkhart-Ruiz-US20230376776A1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart &amp; K. Shan.{" "}
                      <Link
                        href="https://patents.google.com/patent/US11455518B2"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        User classification from data via deep segmentation for
                        semi-supervised learning.
                      </Link>{" "}
                      U.S. Patent Application #16/681,239. Filed 2019. Published
                      as US&thinsp;2021/0142152&thinsp;A1{" "}
                      <Link
                        href="/pubs/Burkhart-Shan-US20210142152A1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>{" "}
                      Granted 2022 as US&thinsp;11,455,518&thinsp;B2{" "}
                      <Link
                        href="/pubs/Burkhart-Shan-US11455518B2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>

                    <li>
                      M. Burkhart &amp; K. Modarresi.{" "}
                      <Link
                        href="https://patents.google.com/patent/US11816562B2"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                      >
                        Digital experience enhancement using an ensemble deep
                        learning model.
                      </Link>{" "}
                      U.S. Patent Application #16/375,627. Filed 2019. Published
                      as US&thinsp;2020/0320382&thinsp;A1{" "}
                      <Link
                        href="/pubs/Burkhart-Modarresi-US20200320382A1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>{" "}
                      Granted 2023 as US&thinsp;11,816,562&thinsp;B2{" "}
                      <Link
                        href="/pubs/Burkhart-Modarresi-US11816562B2.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        inline={true}
                        style={{ whiteSpace: `nowrap` }}
                      >
                        pdf <LinkExternalIcon />
                      </Link>
                    </li>
                  </ul>
                </Text>

                <SubNav
                  aria-label="Main"
                  style={{ flexDirection: `row`, justifyContent: `flex-end` }}
                >
                  <SubNav.Links>
                    <SubNav.Link href="/" rel="noopener noreferrer">
                      home
                    </SubNav.Link>
                  </SubNav.Links>
                </SubNav>
              </SplitPageLayout.Content>

              <SplitPageLayout.Footer padding="condensed">
                <Text
                  as="p"
                  align="end"
                  style={{ padding: 0, margin: 0, textAlign: `right` }}
                >
                  <Octicon icon={LocationIcon} /> Plainfield, Indiana &copy;
                  2024
                </Text>
              </SplitPageLayout.Footer>
            </SplitPageLayout>
          </BaseStyles>
        </ThemeProvider>
      </body>
    </>
  )
}
