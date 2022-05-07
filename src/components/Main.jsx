import React from 'react'
import styled from 'styled-components'

function Main({background}) {
  return (
    <Container>
      <Background>
        <img src={background} />
      </Background>
      <Content>
        <TopContent>
          <span>Top</span>
        </TopContent>
        <CenterContent>Center</CenterContent>
        <BottomContent>Bottom</BottomContent>
      </Content>
    </Container>
  )
}

export default Main

const Container = styled.div`
  flex: 4;
  overflow: hidden;
  position: relative;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%
  z-index: -1;
  opacity: 0.75;

  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

const Content = styled.div`
  position: relative;
  margin: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: white;
`

const TopContent = styled.div`
  
`

const CenterContent = styled.div``

const BottomContent = styled.div`
  margin-bottom: 50px;
`