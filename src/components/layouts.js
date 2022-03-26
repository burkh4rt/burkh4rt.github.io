import React from "react"
import styled from "styled-components"

import Theme from "./component_theme.js"

export const Deck = styled.div`
  align-items: center;
  align-content: center;
  margin: ${props =>
    `${props.theme.spaces.spacer5} auto ${props.theme.spaces.spacer5}`};
  padding: ${props => `0 ${props.theme.spaces.spacer5}`};
  columns: 1;
  column-gap: ${props => props.theme.spaces.spacer7};
  column-fill: balance-all;
  display: block;

  font-family: ${props => props.theme.fontstacks.gillSansStack};
  line-height: 1.3;
  font-size: 16pt;

  @media all and (min-width: ${props => props.theme.breakpoints.widthSm}) {
    max-width: ${props => props.theme.breakpoints.widthSm};
  }

  @media all and (min-width: ${props => props.theme.breakpoints.widthMd}) {
    max-width: ${props => props.theme.breakpoints.widthXl};
    columns: 2;
  }

  @media all and (min-width: ${props => props.theme.breakpoints.widthLg}) {
    columns: 3;
  }

  ul {
    list-style: none;
    margin-left: 0;
    padding-left: 0;
    li {
      line-height: 1.2;
      padding-left: 1em;
      padding-bottom: 0.2em;
      text-indent: -1em;
    }
  }

  a {
    color: ${props => props.theme.colors.navy};
    font-family: inherit;
    text-decoration: none;

    &:visited {
      color: ${props => props.theme.colors.green};
    }
  }

  h1 {
    font-size: 1.777rem;
  }

  h2 {
    font-size: 3.157rem;
  }

  h3 {
    font-size: 2.369rem;
  }

  h4 {
    font-size: 1.777rem;
  }

  h5 {
    font-size: 1.333rem;
  }

  h6 {
    font-size: 1rem;
  }
`

export const DeckThin = styled(Deck)`
  padding: ${props => `0 ${props.theme.spaces.spacer5}`};
  columns: 1;
  max-width: ${props => props.theme.breakpoints.widthSm};
`

export const Card = styled.div`
  margin: ${props => `${props.theme.spaces.spacer7} auto 0`};
  border-width: 0.05rem;
  width: calc(100% - 0.1rem);
  border-style: solid;
  border-radius: 0.5rem;
  border-color: ${props => props.theme.colors.black};
  break-inside: avoid;
  page-break-inside: avoid;
  display: inline-block;
  align-items: center;

  * {
    border-radius: inherit !important;
  }

  &:last-child {
    margin-bottom: 0.05rem;
  }

  font-size: 1rem;
`

export const MediaCard = styled(Card)`
  width: 100%;
  padding: 0;
  .gatsby-image-wrapper-constrained {
    margin: 0;
    display: block !important;
  }
`

export const CardTitle = styled.h6`
  position: relative;
  font-family: ${props => props.theme.fontstacks.gillSansStack};
  left: ${props => props.theme.spaces.spacer5};
  top: -0.75em;
  letter-spacing: 0.05rem;
  font-feature-settings: "smcp" 1;
  margin: 0;
  padding: ${props => `0 ${props.theme.spaces.spacer1}`};
  height: min-content;
  width: min-content;
  white-space: nowrap;
  background-color: ${props => props.theme.colors.white};
  line-height: 1rem;
  font-weight: normal;
  break-inside: avoid;
`

export const CardFooter = styled.h6`
  position: relative;
  left: calc(100% - 5rem);
  bottom: ${props => `-${props.theme.spaces.spacer1}`};
  line-height: 1em;
  margin: 0;
  padding: ${props => `0 ${props.theme.spaces.spacer1}`};
  height: min-content;
  width: min-content;
  white-space: nowrap;
  background-color: ${props => props.theme.colors.white};
  line-height: 1rem;
  font-weight: normal;
  break-inside: avoid;
`

export const CardContent = styled.article`
  margin: ${props => `-${props.theme.spaces.spacer4} 0 0`};
  padding: ${props =>
    `${props.theme.spaces.spacer1} ${props.theme.spaces.spacer4} ${props.theme.spaces.spacer3}`};
  overflow: hidden;
  align-items: center;
  /* align-content: center;
  text-align: justify; */
  text-justify: inter-word;
  * {
    margin: 0;
    font-weight: inherit;
  }
    }
`

export const HeaderCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-family: ${props => props.theme.fontstacks.garamondStack};
  font-feature-settings: "smcp" 1;
  margin-top: 0;
  * {
    font-weight: normal;
    margin: ${props => `${props.theme.spaces.spacer00} auto`};
    height: min-content;
    line-height: 1;
  }
  :nth-child(1) {
    margin-bottom: 0;
  }
  border: none;
`

export const FooterCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  font-family: ${props => props.theme.fontstacks.garamondStack};
  flex-direction: row;
  justify-content: space-between;
  #locale {
    text-align: right;
  }
  a {
    color: inherit;
    font-weight: normal;
    text-decoration: none;
    :hover {
      font-weight: bolder;
      text-decoration: none;
    }
  }
  & > * {
    margin: 0;
    padding: ${props => props.theme.spaces.spacer2};
  }
`

export const MathElt = styled.span`
  font-family: ${props => props.theme.fontstacks.garamondStack};
  font-style: italic;
  font-feature-settings: "kern" 1, "pnum" 1, "onum" 0;
  line-height: 1em;
  white-space-collapsing: collapse;
  text-align: center;
  margin: 0;
  white-space: nowrap;
  * {
    margin: 0;
    white-space: nowrap;
  }
`

export const MathEltGreen = styled(MathElt)`
  color: ${props => props.theme.colors.green};
`

export const MathEltNavy = styled(MathElt)`
  color: ${props => props.theme.colors.navy};
`

export const MathEltRed = styled(MathElt)`
  color: ${props => props.theme.colors.red};
`

export const MathLine = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.2em;
  margin-top: 0.25em;
  margin-bottom: 0.1em;
`

export const TextGreen = styled.span`
  color: ${props => props.theme.colors.green};
`

export const TextNavy = styled.span`
  color: ${props => props.theme.colors.navy};
`

export const TextRed = styled.span`
  color: ${props => props.theme.colors.red};
`

export const EqnSVG = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  flex-wrap: nowrap;
  width: 100%;
  margin: ${props => `${props.theme.spaces.spacer1} 0`};
  img {
    padding: ${props =>
      `${props.theme.spaces.spacer2} ${props.theme.spaces.spacer1}`};
    max-width: 100%;
    flex-grow: 0;
    width: initial;
  }
`

export const ImgRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  padding: ${props =>
    `0 ${props.theme.spaces.spacer2} ${props.theme.spaces.spacer3}`};
  border-radius: 0 !important;
  margin: ${props => `-${props.theme.spaces.spacer1} 0 0`};
  a {
    flex-shrink: 1;
    img {
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      flex-wrap: nowrap;
      width: auto;
      height: 1.5rem;
    }
  }
`
