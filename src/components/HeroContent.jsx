import React from 'react'
import styled from 'styled-components'

function HeroContent({title, description, headerImage}) {
  return (
    <Container>
        <ImageWrapper>
          <img src={headerImage} alt='' />
        </ImageWrapper>
        <h4>{title}</h4>
        <p>{description}</p>
    </Container>
  )
}

export default HeroContent

const Container = styled.div`
    width: 200px;
    height: 200px;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.49);
    border: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    h4 {
        font-size: 16px;
        font-weight: 500;
        margin: 5px 0px;
    }

    p {
        font-size: 12px;
        font-weight: 300;
        text-align: center;
        margin: 5px 0px;
    }
`

const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    margin: auto;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
`