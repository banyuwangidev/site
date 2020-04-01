import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { Router, Location } from "@reach/router"

import Link from '../Link'

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

const NavItemLeft = styled.div``
const NavItemRight = styled.div`padding: 4px 0;`
const LinkHolder = styled.div`
    border-radius: 6px;
    display: inline-block;
    line-height: 32px;
    padding-left: 8px;
    transition: background-color .2s ease;
    a {
        display: inline-block;
        line-height: 32px;
        padding: 0 8px;
    }
    &:hover {
        background-color: #f3f3f3;
    }
`

const Header = ({ title }) => {
    return (
        <Nav>
            <NavItemLeft>
                <LinkHolder>
                    <Link to="/" decoration="none">{title}</Link>
                </LinkHolder>                
            </NavItemLeft>
            <NavItemRight>
                <LinkHolder>
                    <Link to="/blog/" decoration="none">Blog</Link>
                </LinkHolder>
                <LinkHolder>
                    <Link to="/about/" decoration="none">Blog</Link>
                </LinkHolder>
            </NavItemRight>
        </Nav>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header