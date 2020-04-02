import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "../../assets/images/logo-32.png"
import Link from "../Link"

const Nav = styled.nav`
  box-sizing: border-box;
  height: 48px;
  left: 0;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px 16px 0 16px;
  align-items: center;
  position: fixed;
  display: flex;
  right: 0;
  top: 0;
  z-index: 1;
`

const NavItemLeft = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.2;
  font-size: 14px;
  height: 100%;
  flex-grow: 0;
  min-width: 0px;
`

const NavItemRight = styled.div`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  white-space: nowrap;
  height: 28px;
  border-radius: 3px;
  font-size: 14px;
  line-height: 1.2;
  min-width: 0px;
  padding: 4px 0;
`

const LinkHolder = styled.div`
  border-radius: 6px;
  min-width: 0;
  padding: 4px 0;
  transition: background-color 0.2s ease;
  a {
    display: flex;
    align-items: center;
    padding: 0 4px;
  }
  &:hover {
    background-color: #f3f3f3;
  }
`
const SeperateLine = styled.div`
  color: #999;
  display: inline-block;
  font-family: "Inter", Arial, Roboto, sans-serif;
  font-size: 14px;
  font-weight: 500;
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
  padding: 0 4px;
`

const TextOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${(props) => props.size};
`

const FlexSeperate = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`

const Header = ({ title, crumbs, menus }) => {
  const crumbsLen = crumbs.length === undefined ? 0 : crumbs.length

  return (
    <Nav>
      <NavItemLeft>
        <LinkHolder>
          <Link to="/" decoration="none">
            <img style={{ marginRight: 8 }} src={Logo} alt="logo" />
            <TextOverflow size="160px">
              <strong>{title}</strong>
            </TextOverflow>
          </Link>
        </LinkHolder>
        {crumbsLen !== 0
          ? crumbs.map((path, i) => {
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
                      <TextOverflow size="160px">{path}</TextOverflow>
                    </Link>
                  </LinkHolder>
                </React.Fragment>
              )
            })
          : null}
      </NavItemLeft>
      <FlexSeperate />
      <NavItemRight>
        {
          menus.map(menu => (
            <LinkHolder key={menu.title}>
              <Link to={`/${menu.path}`} decoration="none">
                {menu.title}
              </Link>
            </LinkHolder>
          ))
        }
      </NavItemRight>
    </Nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  crumbs: PropTypes.any,
}

export default Header
