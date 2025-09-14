import React from "react";

import { Text, SplitPageLayout } from "@primer/react";

import { LocationIcon } from "@primer/octicons-react";

export default function Footer() {
  return (
    <SplitPageLayout.Footer>
      <Text
        as="p"
        align="end"
        style={{ fontSize: `10pt`, padding: 0, margin: 0, textAlign: `right` }}
      >
        <LocationIcon size="10" verticalAlign="middle" /> Plainfield, Indiana
        &copy;&thinsp;
        {new Date().getFullYear()}
      </Text>
    </SplitPageLayout.Footer>
  );
}
