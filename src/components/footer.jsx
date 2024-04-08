import React from 'react'

import {Octicon, Text, SplitPageLayout} from '@primer/react'

import {LocationIcon} from '@primer/octicons-react'

export default function Footer() {
  return (
    <SplitPageLayout.Footer padding="condensed">
      <Text as="p" align="end" style={{padding: 0, margin: 0, textAlign: `right`}}>
        <Octicon icon={LocationIcon} /> Plainfield, Indiana &copy; 2024
      </Text>
    </SplitPageLayout.Footer>
  )
}
