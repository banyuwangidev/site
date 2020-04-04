import * as React from "react"
import PropTypes from "prop-types"

import Full from './Full'
import Regular from './Regular'
import Header from '../Header'

import headerMenu from '../../shared/headerMenu'
import { GlobalStyle } from "../../shared/global"
import { StoreCtx } from '../../shared/context'
import useMeta from '../../utils/useMeta'

const pathToArr = (path, data) => {
  const pathFiltered = path.replace(/^\/+|\/+$/g, '').split("/");
  const res = data ? [pathFiltered[0],data] : pathFiltered[0] === "" ? 0 : [pathFiltered[0]];
  return res;
}

const Layout = ({ children, pageContext, location }) => {
  const { title } = useMeta();
  const { crumbPage } = React.useContext(StoreCtx);

  const crumbs = pathToArr(location.pathname, crumbPage);

  return (
    <>
      <GlobalStyle />
      <Header title={title} crumbs={crumbs} menus={headerMenu} />
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
