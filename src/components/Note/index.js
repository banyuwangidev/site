import * as React from "react"
import propTypes from "prop-types"
import styled, { css } from "styled-components"

import { colors } from "../../shared/global"

const NoteContainer = styled.div`
    padding: 8px 16px;
    background-color: white;
    border: 1px solid rgb(234, 234, 234);
    color: black;
    font-size: 14px;
    border-radius: 6px;

    span {
      font-weight: 600;
      text-transform: uppercase;
      user-select: none;
      padding-right: 2pt;
    }
    
    ${(props) => props.small && css`
      padding: 4px 8px;
    `}

    ${(props) => props.type && css`
      border: none;
    `}

    ${(props) =>
      props.type === "primary" &&
      css`
        color: ${colors.primary};
        background-color: ${colors.primaryLight};
      `}

    ${(props) => props.type === "secondary" && css`
      color: #666;
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

const Note = (props) => (
  <NoteContainer type={props.type} {...props}>
    {!props.noLabel && <span>{props.label ? props.label : "NOTE"}: </span>}
    {props.children}
  </NoteContainer>
)

export default Note

Note.propTypes = {
  type: propTypes.string,
}
