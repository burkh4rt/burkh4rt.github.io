import React from "react"
import { Link } from "gatsby"

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

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael C. Burkhart's website</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
  </>
)

export default function Home() {
  return (
    <>
      <body>
        <GlobalReset />
        <Fonts />
        <Theme>
          <Deck>
            <HeaderCard>
              <h1>Bayesian Filtering</h1>
            </HeaderCard>

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
                    <a
                      href="/pubs/Brandman-et-al-2018-J-Neural-Eng.pdf"
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
          </Deck>
        </Theme>
        <PrintStyle />
      </body>
    </>
  )
}
