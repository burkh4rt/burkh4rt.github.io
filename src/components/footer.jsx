import React from 'react'

import {useStaticQuery, graphql} from 'gatsby'

import {Octicon, Text, SplitPageLayout} from '@primer/react'

import {LocationIcon} from '@primer/octicons-react'

export default function Footer() {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      site {
        year: buildTime(formatString: "YYYY")
      }
    }
  `)
  return (
    <SplitPageLayout.Footer padding="condensed">
      <Text as="p" align="end" style={{padding: 0, margin: 0, textAlign: `right`}}>
        <Octicon icon={LocationIcon} verticalAlign="middle" /> Plainfield, Indiana &copy; {data.site.year}
      </Text>
    </SplitPageLayout.Footer>
  )
}
