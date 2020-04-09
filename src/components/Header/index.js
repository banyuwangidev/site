import React from "react"
import styled, { css } from "styled-components"
import PropTypes from "prop-types"
import { useScrollData } from "scroll-data-hook"

import Logo from "../../assets/images/logo-32.png"
import Link from "../Link"
import HeaderMobileTree from "./HeaderMobileTree"
import HeaderBreadcrumb from "./HeaderBreadcrumb"

const Nav = styled.nav`
  box-sizing: border-box;
  height: 48px;
  left: 0;
  justify-content: space-between;
  margin: 0 auto;
  padding: 16px;
  align-items: center;
  position: fixed;
  display: flex;
  right: 0;
  top: 0;
  z-index: 1;

  ${(props) =>
    props.scrolled &&
    css`
      border-bottom: 1px solid #dadada6b;
      background-color: white;
    `}

  strong {
    font-weight: 600;
  }
`

const NavItemLeft = styled.div`
  display: flex;
  align-items: center;
  position: relative;
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

  div {
    margin-left: 8px;
  }
`

const LinkHolder = styled.div`
  user-select: none;
  transition: background 120ms ease-in 0s;
  cursor: pointer;
  align-items: center;
  border-radius: 6px;
  flex-shrink: 1;
  line-height: 1.2;
  min-width: 0px;
  padding: 4px 6px;
  color: rgb(55, 53, 47);

  a {
    display: flex;
    align-items: center;
  }

  &:hover {
    background: rgba(55, 53, 47, 0.08);
  }
`

const FlexSeperate = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`

const TextOverflow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: ${(props) => props.size};
`

const ButtonNavMobileLeft = styled.div`
  display: none;
  visibility: hidden;
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 12px 0;
  border-radius: 6px;
  @media (max-width: 768px) {
    display: block;
    visibility: visible;
    cursor: pointer;
    &:hover,
    &:focus {
      background: rgba(55, 53, 47, 0.08);
    }
  }
`

const Header = ({ title, crumbs, menus }) => {
  const { position } = useScrollData()
  const [mobileNavLeft, setmobileNavLeft] = React.useState(false)
  const [mobileNavRight, setmobileNavRight] = React.useState(false)

  return (
    <Nav scrolled={position.y > 100}>
      <NavItemLeft>
        <ButtonNavMobileLeft onClick={() => setmobileNavLeft(true)} />
        {mobileNavLeft && crumbs.length >= 1 && (
          <HeaderMobileTree crumbs={crumbs} action={setmobileNavLeft} />
        )}
        <LinkHolder>
          <Link to="/" decoration="none">
            <img style={{ marginRight: 8 }} src={Logo} alt="logo" />
            <TextOverflow size="160px">
              <strong>{title.replace(/(\s)/gi, "").toLowerCase()}</strong>
            </TextOverflow>
          </Link>
        </LinkHolder>
        <HeaderBreadcrumb
          crumbs={crumbs}
          TextOverflow={TextOverflow}
          LinkHolder={LinkHolder}
        />
      </NavItemLeft>
      <FlexSeperate />
      <NavItemRight>
        {menus.map((menu) => (
          <LinkHolder key={menu.title}>
            <Link to={`/${menu.path}`} decoration="none">
              <span>{menu.title}</span>
            </Link>
          </LinkHolder>
        ))}
      </NavItemRight>
    </Nav>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  crumbs: PropTypes.any,
}

export default Header
