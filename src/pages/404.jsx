import {
  Breadcrumbs,
  Link,
  PageHeader,
  Text,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react";

import { LocationIcon } from "@primer/octicons-react";

import { Helmet } from "react-helmet";

export const Head = () => (
  <Helmet>
    <html lang="en" />
    <title>Michael's 404</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/404/" />
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
                404
              </Breadcrumbs.Item>
            </Breadcrumbs>
          </SplitPageLayout.Header>

          <SplitPageLayout.Content>
            <PageHeader as="h3" sx={{ paddingTop: 0, fontWeight: "normal" }}>
              Michael's 404
            </PageHeader>
            <Text>
              You appear to be lost. This happens from time to time. Shall we
              head <Link href="/">home</Link>?
            </Text>
          </SplitPageLayout.Content>

          <SplitPageLayout.Footer>
            <Text
              as="p"
              align="end"
              style={{
                fontSize: "10pt",
                padding: 0,
                margin: 0,
                textAlign: "right",
              }}
            >
              <LocationIcon size="10" verticalAlign="middle" /> Plainfield,
              Indiana &copy;&thinsp;
              {new Date().getFullYear()}
            </Text>
          </SplitPageLayout.Footer>
        </SplitPageLayout>
      </BaseStyles>
    </>
  );
}
