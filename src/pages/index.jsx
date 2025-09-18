import {
  PageHeader,
  Heading,
  BaseStyles,
  SplitPageLayout,
} from "@primer/react";

import IHead from "../components/index-head";
import HNav from "../components/header-nav";
import TLine from "../components/timeline";
import SNav from "../components/footer-nav";
import Footer from "../components/footer";

import ProfileWebp from "../images/profile_img.jpg?format=webp&quality=100&as=srcset";
import ProfileJpg from "../images/profile_img.jpg";

export default function Home() {
  return (
    <>
      <IHead />
      <BaseStyles>
        <SplitPageLayout
          sx={{
            bg: "canvas.default",
            minHeight: `100vh`,
            padding: `0 0.75em`,
          }}
        >
          <SplitPageLayout.Pane
            position="start"
            divider="none"
            sx={{
              padding: `0.75em`,
              width: `400px`,
              minWidth: "400px",
              maxWidth: "400px",
              overflow: `hidden`,
            }}
          >
            <picture>
              <source srcset={ProfileWebp} type="image/webp" />
              <img
                src={ProfileJpg}
                alt="photo of Michael C. Burkhart"
                width={300}
                height={300}
                fetchpriority="high"
                style={{
                  borderRadius: `50%`,
                  objectFit: `cover`,
                }}
              />
            </picture>

            <Heading
              as="h1"
              sx={{
                fontWeight: `normal`,
                width: `400px`,
                overflow: `hidden`,
                paddingTop: `10pt`,
              }}
            >
              Michael C. Burkhart
            </Heading>

            <HNav />
          </SplitPageLayout.Pane>

          <SplitPageLayout.Content
            divider="none"
            sx={{ paddingTop: 0 }}
            padding="normal"
          >
            <PageHeader as="h3" sx={{ paddingTop: 0, fontWeight: `normal` }}>
              About Me
            </PageHeader>

            <TLine />
            <SNav />
          </SplitPageLayout.Content>

          <Footer />
        </SplitPageLayout>
      </BaseStyles>
    </>
  );
}
