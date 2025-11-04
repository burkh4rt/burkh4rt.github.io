import { Heading, PageHeader, SplitPageLayout } from "@primer/react";

import renderOrHydrate from "../functions/renderOrHydrate";

import "../globals.css";

import Footer from "../components/footer";
import HNav from "../components/header-nav";
import TLine from "../components/timeline";
import ProfileJpg from "../images/profile_img.jpg";
import ProfileWebp from "../images/profile_img.jpg?format=webp&quality=100&as=srcset";

export default function Home() {
  return (
    <>
      <SplitPageLayout
        padding={{
          narrow: "condensed",
          regular: "normal",
          wide: "normal",
        }}
        style={{
          backgroundColor: "var(--bgColor-default)",
          minHeight: "100vh",
        }}
      >
        <SplitPageLayout.Pane
          className="pl-med"
          position="start"
          divider="none"
          sticky={false}
          padding="normal"
          style={{
            minWidth: "calc(min(100vw,400px))",
            overflow: "hidden",
          }}
        >
          <div>
            <picture>
              <source srcSet={ProfileWebp} type="image/webp" />
              <img
                src={ProfileJpg}
                alt="photo of Michael C. Burkhart"
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
              style={{
                width: "calc(min(75vw,350px))",
                overflow: "hidden",
                paddingTop: { narrow: "0pt", regular: "10pt" },
              }}
              className="normal-weight"
            >
              Michael C. Burkhart
            </Heading>

            <HNav />
          </div>
        </SplitPageLayout.Pane>

        <SplitPageLayout.Content
          divider="none"
          style={{ minWidth: "calc(min(75vw,350px))", paddingTop: 0 }}
          padding="normal"
        >
          <PageHeader
            as="h3"
            style={{ paddingTop: 0 }}
            className="normal-weight"
          >
            About Me
          </PageHeader>

          <TLine />
        </SplitPageLayout.Content>
        <Footer />
      </SplitPageLayout>
    </>
  );
}

renderOrHydrate(Home);
