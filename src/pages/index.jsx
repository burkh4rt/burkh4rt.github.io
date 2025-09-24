import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
  PageHeader,
  Heading,
  BaseStyles,
  SplitPageLayout,
  ThemeProvider,
} from "@primer/react";

import "../globals.css";

import HNav from "../components/header-nav";
import TLine from "../components/timeline";
import Footer from "../components/footer";

import ProfileWebp from "../images/profile_img.jpg?format=webp&quality=100&as=srcset";
import ProfileJpg from "../images/profile_img.jpg";

export default function Home() {
  return (
    <>
      <SplitPageLayout
        padding={{
          narrow: "condensed",
          regular: "normal",
          wide: "normal",
        }}
        sx={{
          bg: "canvas.default",
          minHeight: "100vh",
        }}
      >
        <SplitPageLayout.Pane
          className="pl-med"
          position="start"
          divider="none"
          sticky={false}
          padding="normal"
          sx={{
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
              sx={{
                fontWeight: "normal",
                width: "calc(min(75vw,350px))",
                overflow: "hidden",
                paddingTop: { narrow: "0pt", regular: "10pt" },
              }}
            >
              Michael C. Burkhart
            </Heading>

            <HNav />
          </div>
        </SplitPageLayout.Pane>

        <SplitPageLayout.Content
          divider="none"
          style={{ minWidth: "calc(min(75vw,350px))" }}
          sx={{ paddingTop: 0 }}
          padding="normal"
        >
          <PageHeader as="h3" sx={{ paddingTop: 0, fontWeight: "normal" }}>
            About Me
          </PageHeader>

          <TLine />
        </SplitPageLayout.Content>
        <Footer />
      </SplitPageLayout>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider
        colorMode="auto"
        dayScheme="light"
        nightScheme="dark_dimmed"
        preventSSRMismatch
      >
        <BaseStyles>
          <Home />
        </BaseStyles>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
