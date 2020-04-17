import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"

import Avatar from "../Avatar"
import Logo from "../../assets/images/logo-32.png"

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  user-select: none;
`

const ModalHeader = styled.header`
  height: 48px;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 16px;
  display: flex;
  align-items: center;
`

const ModalContent = styled.div`
  font-weight: 600;
`

const ModalItem = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  max-height: 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: rgba(55, 53, 47, 0.08);
  }
  &:hover:last-child {
    background: white;
    cursor: default;
  }
  display: flex;
  align-items: center;
`

const ButtonClose = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #e4e6eb;
  color: black;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
`

const HeaderMobileTree = ({ action, crumbs }) => {
  const navigateTo = (path) => {
    navigate(`/${path}`)
    action(false)
  }

  return (
    <ModalContainer>
      <ModalHeader>
        <ButtonClose onClick={() => action(false)}>×</ButtonClose>
      </ModalHeader>
      <ModalContent>
        <ModalItem onClick={() => navigateTo("")}>
          <Avatar size="tiny" label="logo" src={Logo} />
          <span style={{ marginLeft: 6 }}>Banyuwangi DEV</span>
        </ModalItem>
        {crumbs.map((crumb) => (
          <ModalItem key={crumb} onClick={() => navigateTo(crumb)}>
            ↪ {crumb}
          </ModalItem>
        ))}
      </ModalContent>
    </ModalContainer>
  )
}

export default HeaderMobileTree
