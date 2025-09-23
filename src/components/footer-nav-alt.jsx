import { SubNav } from "@primer/react";

export default function SNav() {
  return (
    <SubNav
      aria-label="Main"
      padding="normal"
      sx={{
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingTop: "10pt",
      }}
    >
      <SubNav.Links>
        <SubNav.Link href="/" rel="noopener noreferrer">
          home
        </SubNav.Link>
      </SubNav.Links>
    </SubNav>
  );
}
