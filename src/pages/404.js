import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

export default function Home({ data }) {
  return (
    <>
      <Helmet>
        <title>Michael's 404</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Michael C. Burkhart" />
      </Helmet>

      <body class="deck--thin">
        <header class="card" id="header">
          <h2>Menagerie</h2>
          <h5>Michael C. Burkhart</h5>
        </header>

        <div class="card">
          <h6 class="title">404</h6>
          <article class="content">
            You appear to be lost. This happens from time to time. Shall we head{" "}
            <Link to="/">home</Link>?
          </article>
        </div>
      </body>
    </>
  )
}
