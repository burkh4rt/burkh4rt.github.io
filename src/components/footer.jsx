import { LocationIcon } from "@primer/octicons-react";
import { SplitPageLayout, Text, UnderlineNav } from "@primer/react";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <SplitPageLayout.Footer divider="none">
      <UnderlineNav aria-label="navigation">
        <UnderlineNav.Item
          href="/"
          aria-current={pathname === "/" ? "page" : undefined}
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
        style={{
          fontSize: "10pt",
          padding: 0,
          paddingTop: "20pt",
          margin: 0,
          textAlign: "right",
        }}
      >
        <LocationIcon size="10" verticalAlign="middle" /> Plainfield, Indiana
        &copy;&thinsp;
        {new Date().getFullYear()}
      </Text>
    </SplitPageLayout.Footer>
  );
}
