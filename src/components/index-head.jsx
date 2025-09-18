import { Helmet } from "react-helmet";

export default function IHead() {
  return (
    <Helmet>
      <meta
        name="description"
        content="Michael Burkhart's homepage. Snippets from work and life, with links."
      />
      <meta property="og:title" content="Michael Burkhart's website" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://burkh4rt.github.io" />
      <meta
        property="og:description"
        content="Michael Burkhart's homepage. Snippets from work and life, with links."
      />
      <meta property="og:locale" content="en_US" />
      <meta name="twitter:site" content="burkh4rt" />
      <meta name="twitter:creator" content="burkh4rt" />
      <meta name="twitter:title" content="Michael Burkhart's website" />
      <meta
        name="twitter:description"
        content="Michael Burkhart's homepage. Snippets from work and life, with links."
      />
      <meta
        property="twitter:image"
        content="https://burkh4rt.github.io/m.webp"
      />
      <meta name="twitter:dnt" content="on" />
      <link rel="me" href="https://twitter.com/burkh4rt" />
      <link rel="me" href="https://mathstodon.xyz/@burkh4rt" />
      <link rel="canonical" href="https://burkh4rt.github.io" />
      <meta
        name="google-site-verification"
        content="RBomW7izIX8odL5WjXJS01CR5JonJ1lcE3EsTAbVDPk"
      />
    </Helmet>
  );
}
