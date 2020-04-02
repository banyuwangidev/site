import * as React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const sizes = {
    large: 72,
    medium: 56,
    small: 42,
    tiny: 32
}

const Image = styled.div`
    width: ${sizes.medium}px;
    height: ${sizes.medium}px;
    align-items: center;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.16);
    display: block;
    display: inline-flex;
    justify-content: center;
    margin: 0 auto 40px;
    overflow: hidden;
    
    &:img {
        width: 100%;
        height: auto;
        display: block;
    }

    /* tiny */
    ${props => props.size === "tiny" && css`
        width: ${sizes.tiny}px;
        height: ${sizes.tiny}px;
    `}

    /* small */
    ${props => props.size === "small" && css`
        width: ${sizes.small}px;
        height: ${sizes.small}px;
    `}

    /* medium */
    ${props => props.size === "medium" && css`
        width: ${sizes.medium}px;
        height: ${sizes.medium}px;
    `}

    /* large */
    ${props => props.size === "large" && css`
        width: ${sizes.large}px;
        height: ${sizes.large}px;
    `}
`


const Avatar = ({ src, size, username, ...props }) => {
    const a11yProps = {};

    return (
        <Image size={size} src={src} {...a11yProps} {...props}>
            <img src={src} alt={username} />
        </Image>
    )
}

export default Avatar;


Avatar.propTypes = {
    /**
     The name of the user (not the nicename)
    */
    username: PropTypes.string,
    src: PropTypes.string,
    /**
     Specify size
    */
    size: PropTypes.oneOf(Object.keys(sizes)),
  };
  
  Avatar.defaultProps = {
    username: 'loading',
    src: null,
    size: 'medium',
  };