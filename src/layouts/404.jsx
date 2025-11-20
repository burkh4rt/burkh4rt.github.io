import { StrictMode } from "react";
import { LocationIcon } from "@primer/octicons-react";
import {
  BaseStyles,
  Breadcrumbs,
  Link,
  PageHeader,
  SplitPageLayout,
  Text,
  ThemeProvider,
} from "@primer/react";

import "../styles/globals.css";

export default function Err404() {
  return (
    <>
      {" "}
      <StrictMode>
        <ThemeProvider
          colorMode="auto"
          dayScheme="light"
          nightScheme="dark_dimmed"
          preventSSRMismatch={true}
        >
          <BaseStyles>
            <SplitPageLayout
              style={{
                backgroundColor: "var(--bgColor-default)",
                minHeight: "100vh",
              }}
            >
              <SplitPageLayout.Header>
                <Breadcrumbs>
                  <Breadcrumbs.Item href="/">home</Breadcrumbs.Item>
                  <Breadcrumbs.Item href="#" selected>
                    404
                  </Breadcrumbs.Item>
                </Breadcrumbs>
              </SplitPageLayout.Header>

              <SplitPageLayout.Content>
                <PageHeader
                  as="h3"
                  sx={{ paddingTop: 0, fontWeight: "normal" }}
                >
                  Michael's 404
                </PageHeader>
                <Text>
                  You appear to be lost. This happens from time to time. Shall
                  we head <Link href="/">home</Link>?
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
            </SplitPageLayout>{" "}
          </BaseStyles>
        </ThemeProvider>
      </StrictMode>
    </>
  );
}

renderOrHydrate(Err404);
