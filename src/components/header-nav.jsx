import { SubNav } from "@primer/react";

import GithubLogo from "../logos/github-logo.svg?react";
import GoogleScholarLogo from "../logos/google-scholar-logo.svg?react";
import INaturalistLogo from "../logos/inaturalist-logo.svg?react";
import LinkedInLogo from "../logos/linkedin-logo.svg?react";
import OrcIDLogo from "../logos/orcid-logo.svg?react";

export default function HNav() {
  return (
    <SubNav aria-label="Main" sx={{ paddingTop: "5pt", paddingBottom: "10pt" }}>
      <SubNav.Links>
        <SubNav.Link
          href="https://www.linkedin.com/in/burkh4rt/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedInLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://github.com/burkh4rt/"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
          aria-label="GitHub"
        >
          <GithubLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://scholar.google.com/citations?user=OcFnA0UAAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          title="Google Scholar"
          aria-label="Google Scholar"
        >
          <GoogleScholarLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://orcid.org/0000-0002-2772-5840"
          target="_blank"
          rel="noopener noreferrer"
          title="ORCID"
          aria-label="ORCID"
        >
          <OrcIDLogo style={{ height: "20px" }} />
        </SubNav.Link>
        <SubNav.Link
          href="https://www.inaturalist.org/people/burkh4rt"
          target="_blank"
          rel="noopener noreferrer"
          title="iNaturalist"
          aria-label="iNaturalist"
        >
          <INaturalistLogo style={{ height: "20px" }} />
        </SubNav.Link>
      </SubNav.Links>
    </SubNav>
  );
}
