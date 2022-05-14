import React from 'react'
import styled from 'styled-components'

function Themes({visible}) {
  return (
    <ThemesContainer isVisible={visible}>
        <span>Hey Calvin</span>
    </ThemesContainer>
  )
}

export default Themes

const ThemesContainer = styled.div`
    position: absolute;
    top: 15%;
    right: 0;
    width: 250px;
    height: 250px;
    background-color: #282828;
    border-radius: 5px 0 0 5px;
    z-index: 0;
    border: none;
    display: none;

    ${({isVisible}) => {
        if (isVisible) {
            return `
                display: flex;
                justify-content: center;
                align-items: center;
            `
        }
    }}
`