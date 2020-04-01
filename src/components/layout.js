/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from './Header'
import Footer from "./footer"
import { GlobalStyle } from "../shared/global"

const Layout = ({ children }) => {
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header title={data.site.siteMetadata.title} />
      <div
        style={{
          display: `flex`,
          flexDirection: `column`,
          minHeight: `78vh`,
          maxWidth: 750,
          margin: `140px auto 0`,
        }}
      >
        <main
          style={{
            flexGrow: 1,
          }}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
