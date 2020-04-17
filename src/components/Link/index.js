import * as React from "react"
import { Link } from "gatsby"
import propTypes from "prop-types"
import styled from "styled-components"

const LinkStyle = styled((props) => <Link {...props} />)`
  line-height: 24px;
  font-weight: 500;
  text-decoration: ${(props) => props.decoration};
  color: #111;
`

const LinkExternal = styled.a`
  line-height: 24px;
  font-weight: 500;
  text-decoration: ${(props) => props.decoration};
  color: #111;
  cursor: ne-resize;
`

LinkStyle.defaultProps = {
  decoration: "underline",
}

LinkExternal.defaultProps = {
  decoration: "underline",
}

const LinkComponent = (props) =>
  props.external ? (
    <LinkExternal
      decoration={props.decoration}
      href={`http://${props.to}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </LinkExternal>
  ) : (
    <LinkStyle {...props} />
  )

export default LinkComponent

LinkComponent.propTypes = {
  decoration: propTypes.string,
  to: propTypes.string.isRequired,
}
