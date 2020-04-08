import React from 'react'
import styled from 'styled-components'

const ModalContainer = styled.div`
    position: fixed;
    z-index: 1;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`

const HeaderMobileTree = ({ action }) => {
    return <ModalContainer>
        <h1>Modal</h1>
        <button onClick={() => action(false)}>Close</button>
    </ModalContainer>
}

export default HeaderMobileTree