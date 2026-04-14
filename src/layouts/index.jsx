import { Heading, PageHeader, SplitPageLayout, Stack } from "@primer/react";

import Footer from "../components/footer";
import HNav from "../components/header-nav";
import TLine from "../components/timeline";
import ProfileJpg from "../images/profile_img.jpg";
import ProfileWebp from "../images/profile_img.jpg?format=webp&quality=100&as=srcset";

import "../styles/globals.css";

export default function Home({ pathname }) {
  return (
    <SplitPageLayout
      padding={{
        narrow: "condensed",
        regular: "normal",
        wide: "normal",
      }}
      sx={{
        display: ["block", "grid"],
        alignItems: "start",
      }}
      className="page"
    >
      <div className="content-wrapper">
        <SplitPageLayout.Pane
          className="pl-med"
          position="start"
          divider="none"
          sticky={false}
          padding="normal"
          style={{
            minWidth: "calc(min(100vw,325px))",
            width: "375px",
            overflow: "hidden",
          }}
        >
          <Stack
            direction="vertical"
            padding={{
              narrow: "condensed",
              regular: "normal",
              wide: "normal",
            }}
            gap="none" // alt: "condensed"
            align="start"
          >
            <picture>
              <source srcSet={ProfileWebp} type="image/webp" />
              <img
                src={ProfileJpg}
                alt="Michael C. Burkhart"
                width={300}
                height={300}
                fetchPriority="high"
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </picture>
            <Heading
              as="h1"
              className="normal-weight"
              style={{
                maxWidth: "calc(min(75vw,325px))",
                overflow: "hidden",
              }}
            >
              Michael C. Burkhart
            </Heading>
            <HNav />
          </Stack>
        </SplitPageLayout.Pane>

        <SplitPageLayout.Content
          divider="none"
          style={{ minWidth: "calc(min(75vw,350px))" }}
          padding="normal"
          className="content"
        >
          <PageHeader as="h3" className="normal-weight" id="about-me">
            About Me
          </PageHeader>

          <TLine />
        </SplitPageLayout.Content>
      </div>
      <Footer pathname={pathname} />
    </SplitPageLayout>
  );
}
