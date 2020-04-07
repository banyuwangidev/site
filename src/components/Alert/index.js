import * as React from "react"
import propTypes from "prop-types"
import styled, { css } from "styled-components"

import { colors } from "../../shared/global"

const AlertContainer = styled.div`
    padding: 8px 16px;
    background-color: ${colors.primaryLight};
    color: black;
    border-radius: 6px;

    ${(props) =>
      props.type === "primary" &&
      css`
        color: ${colors.primary};
        background-color: ${colors.primaryLight};
      `}

    ${(props) =>
      props.type === "success" &&
      css`
        color: ${colors.success};
        background-color: ${colors.successLight};
      `}
    
    ${(props) =>
      props.type === "warning" &&
      css`
        color: ${colors.warning};
        background-color: ${colors.warningLight};
      `}

    ${(props) =>
      props.type === "error" &&
      css`
        color: ${colors.error};
        background-color: ${colors.errorLight};
      `}
`

const Alert = ({ type, children }) => (
  <AlertContainer type={type}>{children}</AlertContainer>
)

export default Alert

Alert.propTypes = {
  type: propTypes.string.isRequired,
}
