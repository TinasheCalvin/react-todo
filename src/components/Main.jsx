import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'
import { TipsAndUpdatesOutlined, MoreHorizOutlined } from '@mui/icons-material'
import HeroContent from './HeroContent'

function Main({background}) {
  let today = new Date()

  return (
    <Container>
      <Background>
        <img src={background} />
      </Background>
      <Content>
        <TopContent>
          <DateContainer>
            <h1>My Day</h1>
            <p>{format(today, "eeee")}, {format(today, "ee")} {format(today, "LLLL")}</p>
          </DateContainer>
          <MenuItems>
            <TipsAndUpdatesOutlined className='icon'/>
            <MoreHorizOutlined className='icon' />
          </MenuItems>
        </TopContent>
        <CenterContent>
          <HeroContent />
        </CenterContent>
        <BottomContent>
          
        </BottomContent>
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
  display: flex;
  align-items: top;
  justify-content: space-between;
  height: 50px;
  width: 100%;
`

const DateContainer = styled.div`
  h1 {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.8px;
    margin-bottom: 3px;
  }

  p {
    font-size: 13px;
    font-weight: 400;
  }
`

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    padding: 2px;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    transition: all 250ms ease-in;

    &:hover {
      background-color: #585656;
    }
  }
`

const CenterContent = styled.div`
  
`

const BottomContent = styled.div`
  width: 100%;
  margin-bottom: 10vh;
  height: 50px;
  background-color: rgba(0,0,0,0.333);
  border-radius: 5px;
`