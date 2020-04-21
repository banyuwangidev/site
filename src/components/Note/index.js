import * as React from "react"
import propTypes from "prop-types"
import styled, { css } from "styled-components"

import { colors } from "../../shared/global"

const NoteContainer = styled.div`
    padding: 8px 16px;
    background-color: ${colors.primaryLight};
    color: black;
    font-size: 14px;
    border-radius: 6px;

    span {
      font-weight: 600;
      text-transform: uppercase;
      user-select: none;
      padding-right: 2pt;
    }

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

const Note = ({ type, children }) => (
  <NoteContainer type={type}>
    <span>NOTE: </span>
    {children}
  </NoteContainer>
)

export default Note

Note.propTypes = {
  type: propTypes.string.isRequired,
}
