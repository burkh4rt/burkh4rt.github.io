import React from "react";

import {
  Breadcrumbs,
  Link,
  PageHeader,
  Text,
  ThemeProvider,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react";

import { Fonts } from "../styles/fonts";
import { customTheme } from "../styles/theme";
import Footer from "../components/footer";

export const Head = () => (
  <>
    <html lang="en" />
    <title>Michael's 404</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Michael C. Burkhart" />
    <link rel="canonical" href="https://burkh4rt.github.io/404/" />
  </>
);

export default function Home() {
  return (
    <>
      <Fonts />
      <ThemeProvider
        theme={customTheme}
        colorMode="auto"
        dayScheme="light"
        nightScheme="dark_dimmed"
        preventSSRMismatch
      >
        <BaseStyles>
          <SplitPageLayout sx={{ bg: "canvas.default", minHeight: `100vh` }}>
            <SplitPageLayout.Header>
              <Breadcrumbs>
                <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
                <Breadcrumbs.Item href="#" selected>
                  404
                </Breadcrumbs.Item>
              </Breadcrumbs>
            </SplitPageLayout.Header>

            <SplitPageLayout.Content>
              <PageHeader as="h3">Michael's 404</PageHeader>
              <Text>
                You appear to be lost. This happens from time to time. Shall we
                head <Link href="/">home</Link>?
              </Text>
            </SplitPageLayout.Content>

            <Footer />
          </SplitPageLayout>
        </BaseStyles>
      </ThemeProvider>
    </>
  );
}
