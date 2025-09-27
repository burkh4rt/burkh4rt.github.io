import { SubNav } from "@primer/react";

import LinkedInLogo from "../logos/linkedin-logo.svg?inline";
import GithubLogo from "../logos/github-logo.svg?inline";
import GoogleScholarLogo from "../logos/google-scholar-logo.svg?inline";
import OrcIDLogo from "../logos/orcid-logo.svg?inline";
import INaturalistLogo from "../logos/inaturalist-logo.svg?inline";

export default function HNav() {
  return (
    <SubNav aria-label="Main" sx={{ paddingTop: "5pt", paddingBottom: "10pt" }}>
      <SubNav.Links>
        <SubNav.Link
          href="https://www.linkedin.com/in/burkh4rt/"
          target="_blank"
        >
          <LinkedInLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link href="https://github.com/burkh4rt/" target="_blank">
          <GithubLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
          target="_blank"
        >
          <GoogleScholarLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://orcid.org/0000-0002-2772-5840"
          target="_blank"
        >
          <OrcIDLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://www.inaturalist.org/people/burkh4rt"
          target="_blank"
        >
          <INaturalistLogo style={{ height: "20px" }} />
        </SubNav.Link>
      </SubNav.Links>
    </SubNav>
  );
}
