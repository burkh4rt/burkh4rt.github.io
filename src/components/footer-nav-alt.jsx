import { SubNav } from "@primer/react";

export default function SNav() {
  return (
    <SubNav
      aria-label="Main"
      padding="normal"
      paddingTop="10pt"
      sx={{ flexDirection: `row`, justifyContent: `flex-end` }}
    >
      <SubNav.Links>
        <SubNav.Link href="/" rel="noopener noreferrer">
          home
        </SubNav.Link>
      </SubNav.Links>
    </SubNav>
  );
}
