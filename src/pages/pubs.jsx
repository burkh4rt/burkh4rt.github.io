import {
  Breadcrumbs,
  Link,
  PageHeader,
  Text,
  SubNav,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react";

import { LinkExternalIcon } from "@primer/octicons-react";

import Footer from "../components/footer";
import SNav from "../components/footer-nav-alt";
import { Helmet } from "react-helmet";

export const Head = () => (
  <Helmet>
    <html lang="en" />
    <title>publications</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/pubs/" />
  </Helmet>
);

export default function Home() {
  return (
    <>
      <Head />
      <BaseStyles>
        <SplitPageLayout sx={{ bg: "canvas.default", minHeight: "100vh" }}>
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
                listStyle: "none",
                marginLeft: 0,
              },
              li: {
                paddingLeft: "2em",
                textIndent: "-2em",
                paddingBottom: "0.75em",
                maxWidth: "calc(max(75%,500px))",
              },
            }}
          >
            <PageHeader as="h3" id="papers" sx={{ fontWeight: "normal" }}>
              Papers
            </PageHeader>

            <Text>
              <ul>
                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.1017/S0017089524000363"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Actions of nilpotent groups on nilpotent groups
                  </Link>
                  , Glasgow Mathematical Journal 67 (2025)&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4883973"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4883973&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2025-Glasg-Math-J.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.1017/prm.2023.96"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Fixed point conditions for non-coprime actions
                  </Link>
                  , Proceedings of the Royal Society of Edinburgh Section A:
                  Mathematics 155 (2025)&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4899574"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4899574&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2025-Proc-Roy-Soc-Edinb-Sect-A-Math.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  E. G. Woo, M. Burkhart, E. Alsentzer, &amp; B. Beaulieu-Jones,{" "}
                  <Link
                    href="https://doi.org/10.1038/s41746-025-01681-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Synthetic data distillation enables the extraction of
                    clinical information at scale
                  </Link>
                  , npj Digital Medicine 8 (2025)&ensp;&ensp;
                  <Link
                    href="pubs/Woo-Burkhart-et-al-2025-npj-Digit-Med.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart, L. Lee, D. Vaghari, A. Toh, E. Chong, C. Chen, P.
                  Tiňo, &amp; Z. Kourtzi,{" "}
                  <Link
                    href="https://doi.org/10.1038/s41598-024-60914-w"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Unsupervised multimodal modeling of cognitive and brain
                    health trajectories for early dementia prediction
                  </Link>
                  , Scientific Reports 14 (2024)&ensp;&ensp;
                  <Link
                    href="https://github.com/burkh4rt/Multimodal-Trajectory-Modeling"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    code&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-et-al-2024-Sci-Rep.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  L. Lee, D. Vaghari, M. Burkhart, P. Tiňo, M. Montagnese, Z.
                  Li, K. Zühlsdorff, J. Giorgio, G. Williams, E. Chong, C. Chen,
                  B. Underwood, T. Rittman, &amp; Z. Kourtzi,{" "}
                  <Link
                    href="https://doi.org/10.1016/j.eclinm.2024.102725"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Robust and interpretable AI-guided marker for early dementia
                    prediction in real-world clinical settings
                  </Link>
                  , eClinicalMedicine 74 (2024)&ensp;&ensp;
                  <Link
                    href="pubs/Lee-Vaghari-et-al-2024-eClinicalMedicine.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; G. Ruiz,{" "}
                  <Link
                    href="https://doi.org/10.1016/j.jocs.2023.102054"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Neuroevolutionary representations for learning heterogeneous
                    treatment effects
                  </Link>
                  , Journal of Computational Science 71 (2023)&ensp;&ensp;
                  <Link
                    href="https://github.com/burkh4rt/Learning-Representations-Causal-Inference"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    code&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Ruiz-2023-J-Comput-Sci.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.1007/s11590-022-01895-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Discriminative Bayesian filtering lends momentum to the
                    stochastic Newton method for minimizing log-convex functions
                  </Link>
                  , Optimization Letters 17 (2023)&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4557438"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4557438&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="https://github.com/burkh4rt/Filtered-Stochastic-Newton"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    code&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2023-Optim-Lett.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  R. Li, E. Harshfield, S. Bell, M. Burkhart, A. Tuladhar,
                  &hellip;, C. Chen, Z. Kourtzi, &amp; H. Markus,{" "}
                  <Link
                    href="https://doi.org/10.1016/j.cccb.2023.100179"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Predicting incident dementia in cerebral small vessel
                    disease: comparison of machine learning and traditional
                    statistical models
                  </Link>
                  , Cerebral Circulation &ndash; Cognition and Behavior 5
                  (2023)&ensp;&ensp;
                  <Link
                    href="pubs/Li-et-al-2023-Cereb-Circ-Cogn-Behav.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  R. Borchert, T. Azevedo, A. Badhwar, J. Bernal, M. Betts, R.
                  Bruffaerts, M. Burkhart, I. Dewachter, &hellip;, D. Llewellyn,
                  M. Veldsman, &amp; T. Rittman,{" "}
                  <Link
                    href="https://doi.org/10.1002/alz.13412"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Artificial intelligence for diagnostic and prognostic
                    neuroimaging in dementia: a systematic review
                  </Link>
                  , Alzheimer's &amp; Dementia 19 (2023)&ensp;&ensp;
                  <Link
                    href="pubs/Borchert-et-al-2023-Alzheimers-Dement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.1017/S0013091522000499"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Conjugacy conditions for supersoluble complements of an
                    abelian base and a fixed point result for non-coprime
                    actions
                  </Link>
                  , Proceedings of the Edinburgh Mathematical Society 65
                  (2022)&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4542651"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4542651&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2022-Proc-Edinb-Math-Soc.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; G. Ruiz,{" "}
                  <Link
                    href="https://doi.org/10.1007/978-3-031-08754-7_1"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Neuroevolutionary feature representations for causal
                    inference
                  </Link>
                  , Computational Science &ndash; ICCS 2022&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Ruiz-2022-Comput-Sci.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.1007/978-3-030-77964-1_22"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Discriminative Bayesian filtering for the semi-supervised
                    augmentation of sequential observation data
                  </Link>
                  , Computational Science &ndash; ICCS 2021&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4371656"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4371656&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2021-Comput-Sci.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; K. Shan,{" "}
                  <Link
                    href="https://doi.org/10.1007/978-3-030-50420-5_22"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Deep low-density separation for semi-supervised
                    classification
                  </Link>
                  , Computational Science &ndash; ICCS 2020&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4152505"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4152505&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Shan-2020-Comput-Sci.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart, D. Brandman, B. Franco, L. Hochberg, &amp; M.
                  Harrison,{" "}
                  <Link
                    href="https://doi.org/10.1162/neco_a_01275"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    The discriminative Kalman filter for Bayesian filtering with
                    nonlinear and nongaussian observation models
                  </Link>
                  , Neural Computation 32 (2020)&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4101168"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4101168&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="https://github.com/burkh4rt/Discriminative-Kalman-Filter"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    code&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-et-al-2020-Neural-Comput.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; K. Modarresi,{" "}
                  <Link
                    href="https://doi.org/10.1007/978-3-030-22741-8_42"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Determining adaptive loss functions and algorithms for
                    predictive models
                  </Link>
                  , Computational Science &ndash; ICCS 2019&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Modarresi-2019-Comput-Sci-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; K. Modarresi,{" "}
                  <Link
                    href="https://doi.org/10.1007/978-3-030-22741-8_43"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Adaptive objective functions and distance metrics for
                    recommendation systems
                  </Link>
                  , Computational Science &ndash; ICCS 2019&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=3975427"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR3975427&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Modarresi-2019-Comput-Sci.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  D. Brandman, M. Burkhart, J. Kelemen, B. Franco, M. Harrison,
                  &amp; L. Hochberg,{" "}
                  <Link
                    href="https://doi.org/10.1162/neco_a_01129"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Robust closed-loop control of a cursor in a person with
                    tetraplegia using Gaussian process regression
                  </Link>
                  , Neural Computation 30 (2018)&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=3873814"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR3873814&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Brandman-et-al-2018-Neural-Comput.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  D. Brandman, T. Hosman, J. Saab, M. Burkhart, B. Shanahan, J.
                  Ciancibello, &hellip;, M. Harrison, J. Simeral, &amp; L.
                  Hochberg,{" "}
                  <Link
                    href="https://doi.org/10.1088/1741-2552/aa9ee7"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Rapid calibration of an intracortical brain computer
                    interface for people with tetraplegia
                  </Link>
                  , Journal of Neural Engineering 15 (2018)&ensp;&ensp;
                  <Link
                    href="pubs/Brandman-et-al-2018-J-Neural-Eng.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart, Y. Heo, &amp; V. Zavala,{" "}
                  <Link
                    href="https://doi.org/10.1016/j.enbuild.2014.01.048"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Measurement and verification of building systems under
                    uncertain data: a Gaussian process modeling approach
                  </Link>
                  , Energy and Buildings 75 (2014)&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-et-al-2014-Energy-Build.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>
              </ul>
            </Text>

            <PageHeader as="h3" id="preprints" sx={{ fontWeight: "normal" }}>
              Preprints
            </PageHeader>
            <Text>
              <ul>
                <li>
                  B. Ramadan, M.-C. Liu, M. Burkhart, W. Parker, &amp; B.
                  Beaulieu-Jones,{" "}
                  <Link
                    href="https://doi.org/10.1101/2025.08.09.25333360"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Diagnostic codes in AI prediction models and label leakage
                    of same-admission clinical outcomes
                  </Link>
                  , medRxiv:2025.08.09.25333360&ensp;&ensp;
                  <Link
                    href="pubs/Ramadan-et-al-2025-medRxiv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  S. Sethi, D. Chen, M. Burkhart, N. Bhandari, B. Ramadan, &amp;
                  B. Beaulieu-Jones,{" "}
                  <Link
                    href="https://doi.org/10.48550/arXiv.2508.01521"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Prototype learning to create refined interpretable digital
                    phenotypes from ECGs
                  </Link>
                  , arXiv:2508.01521&ensp;&ensp;
                  <Link
                    href="pubs/Sethi-et-al-2025-arXiv-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart, B. Ramadan, L. Solo, W. Parker, &amp; B.
                  Beaulieu-Jones,{" "}
                  <Link
                    href="https://doi.org/10.48550/arXiv.2507.22798"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Quantifying surprise in clinical care: detecting highly
                    informative events in electronic health records with
                    foundation models
                  </Link>
                  , arXiv:2507.22798&ensp;&ensp;
                  <Link
                    href="https://github.com/burkh4rt/Quantifying-Surprise-EHRs"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    code&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-et-al-2025-arXiv-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart, B. Ramadan, Z. Liao, K. Chhikara, J. Rojas, W.
                  Parker, &amp; B. Beaulieu-Jones,{" "}
                  <Link
                    href="https://doi.org/10.48550/arXiv.2504.10422"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Foundation models for electronic health records:
                    representation dynamics and transferability
                  </Link>
                  , arXiv:2504.10422&ensp;&ensp;
                  <Link
                    href="https://github.com/burkh4rt/FMs-EHRs-Rep-Dynamics-and-Transfer"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    code&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-et-al-2025-arXiv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  S. Sethi, D. Chen, T. Statchen, M. Burkhart, N. Bhandari, B.
                  Ramadan, &amp; B. Beaulieu-Jones,{" "}
                  <Link
                    href="https://doi.org/10.48550/arXiv.2504.08713"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    ProtoECGNet: case-based interpretable deep learning for
                    multi-label ECG classification with contrastive learning
                  </Link>
                  , arXiv:2504.08713&ensp;&ensp;
                  <Link
                    href="pubs/Sethi-et-al-2025-arXiv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Abroshan, M. Burkhart, O. Giles, S. Greenbury, Z. Kourtzi,
                  J. Roberts, M. van der Schaar, J. Steyn, A. Wilson, &amp; M.
                  Yong,{" "}
                  <Link
                    href="https://doi.org/10.48550/arXiv.2303.01513"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Safe AI for health and beyond &ndash; monitoring to
                    transform a health service
                  </Link>
                  , arXiv:2303.01513&ensp;&ensp;
                  <Link
                    href="pubs/Abroshan-et-al-2023-arXiv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.48550/arXiv.1209.3357"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Linear transformations &amp; the multivariate generating
                    function
                  </Link>
                  , arXiv:1209.3357&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2012-arXiv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>
              </ul>
            </Text>

            <PageHeader as="h3" id="dissertation" sx={{ fontWeight: "normal" }}>
              Dissertation
            </PageHeader>
            <Text>
              <ul>
                <li>
                  M. Burkhart,{" "}
                  <Link
                    href="https://doi.org/10.26300/nhfp-xv22"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    A Discriminative Approach to Bayesian Filtering with
                    Applications to Human Neural Decoding
                  </Link>
                  , Ph.D. Dissertation, Division of Applied Mathematics, Brown
                  University, Providence, 2019&ensp;&ensp;
                  <Link
                    href="https://mathscinet.ams.org/mathscinet-getitem?mr=4158190"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    MR4158190&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                  &ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-2019.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>
              </ul>

              <PageHeader as="h3" id="patents" sx={{ fontWeight: "normal" }}>
                Patents &amp; Pending
              </PageHeader>
              <ul>
                <li>
                  M. Burkhart &amp; G. Ruiz,{" "}
                  <Link
                    href="https://patents.google.com/patent/US20230376776A1"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Causal inference via neuroevolutionary selection
                  </Link>
                  , U.S. Patent Application #17/748,891 filed 2022, published
                  2023&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Ruiz-US20230376776A1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; K. Shan,{" "}
                  <Link
                    href="https://patents.google.com/patent/US11455518B2"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    User classification from data via deep segmentation for
                    semi-supervised learning
                  </Link>
                  , U.S. Patent 11,455,518 filed 2019, granted 2022&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Shan-US11455518B2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>

                <li>
                  M. Burkhart &amp; K. Modarresi,{" "}
                  <Link
                    href="https://patents.google.com/patent/US11816562B2"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                  >
                    Digital experience enhancement using an ensemble deep
                    learning model
                  </Link>
                  , U.S. Patent 11,816,562 filed 2019, granted 2023&ensp;&ensp;
                  <Link
                    href="pubs/Burkhart-Modarresi-US11816562B2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    inline={true}
                    sx={{ whiteSpace: "nowrap" }}
                  >
                    pdf&thinsp;
                    <LinkExternalIcon verticalAlign="middle" />
                  </Link>
                </li>
              </ul>
            </Text>

            <SNav />
          </SplitPageLayout.Content>

          <Footer />
        </SplitPageLayout>
      </BaseStyles>
    </>
  );
}
