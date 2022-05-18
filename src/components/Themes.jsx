import React, { useContext } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { TasksContext } from '../context/TasksContext'

function Themes({visible, name}) {
    let {changeBackgroundTheme} = useContext(TasksContext)
    
    function handleThemeSelect(theme) {
        changeBackgroundTheme(name, theme)
    }

    return (
        <Container isVisible={visible}>
            <span>Themes</span>
            <span className="desc">Choose desired theme from the ones given below</span>
            <ThemesWrapper>
                <Theme onClick={() => handleThemeSelect('/images/BirdNest.jpg')}>
                    <img src='/images/BirdNest.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Fern.jpg')}>
                    <img src='/images/Fern.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Safari.jpg')}>
                    <img src='/images/Safari.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Beach.jpg')}>
                    <img src='/images/Beach.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Desert.jpg')}>
                    <img src='/images/Desert.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Field.jpg')}>
                    <img src='/images/Field.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Gradient.jpg')}>
                    <img src='/images/Gradient.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Lighthouse.jpg')}>
                    <img src='/images/Lighthouse.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Sea.jpg')}>
                    <img src='/images/Sea.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Sunrise.jpg')}>
                    <img src='/images/Sunrise.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/Sunset.jpg')}>
                    <img src='/images/Sunset.jpg' alt='' />
                </Theme>
                <Theme onClick={() => handleThemeSelect('/images/TV Tower.jpg')}>
                    <img src='/images/TV Tower.jpg' alt='' />
                </Theme>
            </ThemesWrapper>
        </Container>
    )
}

export default Themes

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
    right: 0;
    width: 250px;
    height: 250px;
    padding: 10px;
    background-color: #282828;
    border-radius: 5px 0 0 5px;
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

const ThemesWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
`

const Theme = styled.div`
    width: 45px;
    height: 45px;
    border: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    &:hover {
        transform: scale(1.03);
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
    }
`