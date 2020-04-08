import React from 'react'
import styled from 'styled-components'

import Link from '../Link'

const SeperateLine = styled.div`
  color: #999;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 32px;
  margin: 0 2px;
  vertical-align: middle;
`

const SpanText = styled.span`
  line-height: 24px;
  font-weight: 500;
  text-decoration: none;
  color: #111;
  line-height: 32px;
  padding: 0 6px;
`

const HeaderBreadcrumb = ({ crumbs, TextOverflow, LinkHolder }) => {
    const crumbsLen = crumbs.length === undefined ? 0 : crumbs.length
    return (
        <React.Fragment>
            {crumbsLen !== 0 && crumbs.map((path, i) => {
              return crumbsLen === i + 1 ? (
                <React.Fragment key={path}>
                  <SeperateLine>/</SeperateLine>
                  <TextOverflow size="240px">
                    <SpanText>{path}</SpanText>
                  </TextOverflow>
                </React.Fragment>
              ) : (
                <React.Fragment key={path}>
                  <SeperateLine>/</SeperateLine>
                  <LinkHolder>
                    <Link to={`/${path}`} decoration="none">
                      <TextOverflow size="160px">
                        <span>{path}</span>
                      </TextOverflow>
                    </Link>
                  </LinkHolder>
                </React.Fragment>
              )
            })}
        </React.Fragment>
    )
}

export default HeaderBreadcrumb