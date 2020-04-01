import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

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

const NavItemLeft = styled.div`
    display: flex;
    align-items: center;
`

const NavItemRight = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 0;
`

const LinkHolder = styled.div`
    border-radius: 6px;
    line-height: 32px;
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
    padding: 0 8px;
`

const Header = ({ title, crumbs }) => {
    const crumbsLen = crumbs.length === undefined ? 0 : crumbs.length;
    
    return (
        <Nav>
            <NavItemLeft>
                <LinkHolder>
                    <Link to="/" decoration="none">{title}</Link>
                </LinkHolder>
                {
                    crumbsLen !== 0 ? crumbs.map((path, i) => {
                        return (crumbsLen === i + 1) ? (
                            <React.Fragment key={path}>
                                <SeperateLine>/</SeperateLine>
                                <SpanText>{path}</SpanText>
                            </React.Fragment>
                            ): (
                    <React.Fragment key={path}>
                        <SeperateLine>/</SeperateLine>
                        <LinkHolder>
                            <Link to={`/${path}`} decoration="none">{path}</Link>
                        </LinkHolder>
                    </React.Fragment>
                    )}) : null
                }
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
    title: PropTypes.string.isRequired,
    crumbs: PropTypes.any
}

export default Header