import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Full from './Full'
import Regular from './Regular'
import Header from '../Header'
import { GlobalStyle } from "../../shared/global"
import useCrumb from '../../utils/useCrumb'

const Layout = ({ children, pageContext }) => {
  const path = useCrumb();
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
      <Header title={data.site.siteMetadata.title} crumbs={path} />
        {
            pageContext.layout === "full" ? <Full>{children}</Full> : <Regular>{children}</Regular>
        }
     </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout