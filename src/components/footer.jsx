import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import { Octicon, Text, SplitPageLayout } from "@primer/react";

import { LocationIcon } from "@primer/octicons-react";

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        year: buildTime(formatString: "YYYY")
      }
    }
  `);
  return (
    <SplitPageLayout.Footer>
      <Text
        as="p"
        align="end"
        style={{ fontSize: `10pt`, padding: 0, margin: 0, textAlign: `right` }}
      >
        <Octicon icon={LocationIcon} size="10" verticalAlign="middle" />{" "}
        Plainfield, Indiana &copy;&thinsp;
        {data.site.year}
      </Text>
    </SplitPageLayout.Footer>
  );
}
