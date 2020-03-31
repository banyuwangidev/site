import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Nav = styled.nav`
    box-sizing: border-box;
    height: 48px;
    left: 0;
    justify-content: space-between;
    margin: 0 auto;
    padding-top: 16px;
    position: fixed;
    display: flex;
    right: 0;
    top: 0;
    z-index: 1;
`

const NavItemLeft = styled.div``
const NavItemRight = styled.div``

const Header = () => {
    return (
        <Nav>
            <NavItemLeft>Banyuwangi DEV</NavItemLeft>
            <NavItemRight>bro</NavItemRight>
        </Nav>
    )
}

export default Header