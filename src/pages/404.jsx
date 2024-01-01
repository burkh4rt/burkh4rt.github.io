import React from "react"
import { Link } from "gatsby"

import * as style from "../styles/components.module.css"

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael's 404</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
  </>
)

export default function Home() {
  return (
    <>
      <div className={style.deckThin}>
        <div className={style.headerCard}>
          <h1>Michael's 404</h1>
        </div>
        <div className={style.card}>
          <div className={style.cardTitle}>Page not found</div>
          <article className={style.cardContent}>
            You appear to be lost. This happens from time to time. Shall we head{" "}
            <Link to="/">home</Link>?
          </article>
        </div>
      </div>
    </>
  )
}
