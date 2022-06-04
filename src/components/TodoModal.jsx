import React from 'react'
import styled, { keyframes, css } from 'styled-components'

function TodoModal({visible}) {
    return (
        <Container isVisible={visible}>
            <h4>Hello</h4> 
        </Container>
    )
}

export default TodoModal

const fadeInTop = keyframes`
    0% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
`

const Container = styled.div`
    position: absolute;
    top: 15%;
    left: 40%;
    // right: 0;
    width: 250px;
    height: 250px;
    padding: 10px;
    margin-right: 10px;
    background-color: #282828;
    border-radius: 5px;
    z-index: 0;
    border: none;
    display: none;
    opacity: 0;

    span {
        font-size: 14px;

        &.desc {
            display: block;
            font-weight: 300;
            font-size: 10px;
        }
    }

    ${({isVisible}) => {
        if (isVisible) {
            return css`
                display: block;
                opacity: 1;
                animation: ${fadeInTop} 500ms;
            `
        }
    }}
`