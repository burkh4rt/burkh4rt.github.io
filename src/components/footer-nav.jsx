import { SubNav } from "@primer/react";

export default function SNav() {
  return (
    <SubNav
      aria-label="Main"
      padding="normal"
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: "10pt",
      }}
    >
      <SubNav.Links>
        <SubNav.Link
          href="/pubs"
          rel="noopener noreferrer"
          sx={{ fontSize: "1rem" }}
        >
          publications
        </SubNav.Link>
        <SubNav.Link
          href="/links"
          rel="noopener noreferrer"
          sx={{ fontSize: "1rem" }}
        >
          links
        </SubNav.Link>
        <SubNav.Link
          href="cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ fontSize: "1rem" }}
        >
          c.v.
        </SubNav.Link>
      </SubNav.Links>
    </SubNav>
  );
}
