import { LocationIcon } from "@primer/octicons-react";
import {
  Breadcrumbs,
  Link,
  PageHeader,
  SplitPageLayout,
  Text,
} from "@primer/react";

import renderOrHydrate from "../functions/renderOrHydrate";

import "../globals.css";

export default function Err404() {
  return (
    <>
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
            You appear to be lost. This happens from time to time. Shall we head{" "}
            <Link href="/">home</Link>?
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
    </>
  );
}

renderOrHydrate(Err404);
