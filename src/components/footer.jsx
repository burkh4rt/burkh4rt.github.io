import { LocationIcon } from "@primer/octicons-react";
import { SplitPageLayout, Text, UnderlineNav } from "@primer/react";

export default function Footer({ pathname }) {
  return (
    <SplitPageLayout.Footer divider="none">
      <UnderlineNav aria-label="navigation">
        <UnderlineNav.Item
          href="/"
          aria-current={
            pathname === "/" ||
            pathname === "" ||
            pathname.startsWith("/index") ||
            pathname === "/home" ||
            pathname === undefined
              ? "page"
              : undefined
          }
        >
          home
        </UnderlineNav.Item>
        <UnderlineNav.Item
          href="/pubs"
          aria-current={pathname.startsWith("/pubs") ? "page" : undefined}
        >
          publications
        </UnderlineNav.Item>
        <UnderlineNav.Item
          href="/links"
          aria-current={pathname.startsWith("/links") ? "page" : undefined}
        >
          links
        </UnderlineNav.Item>
        <UnderlineNav.Item href="/cv.pdf" target="_blank">
          c.v.
        </UnderlineNav.Item>
      </UnderlineNav>

      <Text
        as="p"
        align="end"
        padding="normal"
        style={{
          fontSize: "10pt",
          textAlign: "right",
        }}
        suppressHydrationWarning={true}
      >
        <LocationIcon size="10" verticalAlign="middle" /> Plainfield, Indiana
        &copy;&thinsp;
        {new Date().getFullYear()}
      </Text>
    </SplitPageLayout.Footer>
  );
}
