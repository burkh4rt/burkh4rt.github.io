/*
redirects https://burkh4rt.github.io/cv
to https://burkh4rt.github.io/cv.pdf
*/

import React from "react";

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael's cv</title>
    <meta
      http-equiv="refresh"
      content="0;url=https://burkh4rt.github.io/cv.pdf"
    />
    <link rel="canonical" href="https://burkh4rt.github.io/cv/" />
  </>
);

export default function Home() {
  return <></>;
}
