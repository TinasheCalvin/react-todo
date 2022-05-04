import React from 'react'
import styled from 'styled-components'

function Main() {
  return (
    <Container>
        <Background src="/images/Beach.jpg"/>
    </Container>
  )
}

export default Main

const Container = styled.div`
    flex: 4;
    overflow: hidden;
`

const Background = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    z-index: -1;
`