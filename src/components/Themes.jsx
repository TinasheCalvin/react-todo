import React from 'react'
import styled from 'styled-components'

function Themes({visible}) {
  return (
    <Container isVisible={visible}>
        <span>Themes</span>
        <span className="desc">Choose desired theme from the ones given below</span>
        <ThemesWrapper>
            <Theme>
                <img src='/images/BirdNest.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Fern.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Safari.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Beach.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Desert.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Field.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Gradient.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Lighthouse.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Sea.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Sunrise.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/Sunset.jpg' alt='' />
            </Theme>
            <Theme>
                <img src='/images/TV Tower.jpg' alt='' />
            </Theme>
        </ThemesWrapper>
    </Container>
  )
}

export default Themes

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
            return `
                display: block;
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