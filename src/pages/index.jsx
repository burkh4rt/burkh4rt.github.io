import React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import * as style from "../styles/components.module.css"

import Msvg from "../logos/m.svg"

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
      <div className={style.deckThin}>
        <div className={style.headerCard}>
          <h1>Michael C. Burkhart</h1>
        </div>

        <div className={style.card}>
          <div className={style.cardTitle}>Hello</div>
          <article className={style.cardContent}>
            … and welcome to my website.
          </article>
        </div>

        <div className={style.mediaCard}>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Michael C. Burkhart"
          />
        </div>


        <div className={style.card}>
          <div className={style.cardTitle}>About me</div>
          <article className={style.cardContent}>
            I earned my <span itemprop="honorificSuffix">Ph.D.</span> in 2019
            from{" "}
            <span
              itemprop="alumniOf"
              itemscope
              itemtype="http://schema.org/CollegeOrUniversity"
            >
              <span itemprop="name">Brown University</span>
              's{" "}
              <span itemprop="department">Division of Applied Mathematics</span>
            </span>
            . For my{" "}
            <a href="https://doi.org/10.26300/nhfp-xv22">dissertation</a>, I
            derived a novel approach to{" "}
            <span itemprop="knowsAbout">Bayesian filtering</span>, the
            Discriminative Kalman Filter, motivated by and developed with my
            advisor M. Harrison and collaborators D. Brandman and L. Hochberg.
            We validated and successfully implemented this filter as part of the{" "}
            <span itemprop="affiliation">
              <Link href="https://www.braingate.org">BrainGate</Link> Clinical Trial
            </span>{" "}
            that enables participants with quadriplegia to communicate and
            interact with their environments in real time using mental imagery
            alone. <br />I then spent three years working as a machine learning
            scientist at Adobe in California. In 2021, I joined Cambridge
            University as a research associate to develop machine learning-based
            approaches for the early diagnosis of neurodegenerative disease.
          </article>
        </div>
      </div>
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
