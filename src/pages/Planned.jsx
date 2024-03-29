import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { ListAltOutlined,MoreHorizOutlined,AddOutlined,CircleOutlined,HomeOutlined,CalendarMonthOutlined,AlarmOnOutlined,EventRepeatOutlined,Menu } from '@mui/icons-material'
import HeroContent from '../components/HeroContent'
import Themes from '../components/Themes'
import { TasksContext } from '../context/TasksContext'
import useWindowSize from '../hooks/useWindowSize'

function Planned() {
    const [input, setInput] = useState('')
    const [addTodo, setAddTodo] = useState(false)
    let { width } = useWindowSize()
  
    // defining state to show the themes wrapper
    const [themesVisible, setThemesVisible] = useState(false)

    // defining the state for the todo list
    const { themes, addTodoTask, sidebarOpen, openSidebar } = useContext(TasksContext)
  
    function handleAddTodo() {
      let todo = {
        description: input,
        isComplete: false,
        isImportant: false
      }
      addTodoTask(todo)
      // resetting the input
      setInput('')
      setAddTodo(false)
    }
  
    return (
      <Container width={width}>
        <Background>
          <img src={themes.planned} alt="" />
        </Background>
        {(width <= 768 && !sidebarOpen) && <SidebarMenu fontSize='small' onClick={openSidebar}/>}
        <Content>
          <TopContent>
            <HeadingContainer>
                <ListAltOutlined style={{fontSize: 26}} />
                <h1>Planned</h1>
            </HeadingContainer>
            <MenuItems>
              <MoreHorizOutlined className='icon' onClick={() => setThemesVisible(!themesVisible)} />
            </MenuItems>
          </TopContent>
          <CenterContent>
            <HeroContent 
              description="Tasks with due dates and reminders show up here."
              headerImage="/images/illustrations/add-todo.svg"
            />
          </CenterContent>
          <BottomContent onClick={() => setAddTodo(true)}>
            {addTodo ? (
              <>
                <InputWrapper>
                  <CircleOutlined onClick={handleAddTodo}/>
                  <input type="text" placeholder="Try typing 'Pay utilities bill by Friday 6pm'" value={input} onChange={e => setInput(e.target.value)} />
                </InputWrapper>
                {input.length > 0 && (
                  <MenuIconsWrapper>
                    {width >= 768 && (
                      <MenuIcon>
                        <HomeOutlined />
                        <span>Tasks</span>
                      </MenuIcon>
                    )}
                    <MenuIcon>
                      <CalendarMonthOutlined fontSize='small'/>
                    </MenuIcon>
                    <MenuIcon>
                      <AlarmOnOutlined fontSize='small'/>
                    </MenuIcon>
                    <MenuIcon>
                      <EventRepeatOutlined fontSize='small'/>
                    </MenuIcon>
                  </MenuIconsWrapper>
                )}
              </>
            ) : (
              <AddTodoWrapper>
                <AddOutlined />
                <span>Add a todo</span>
              </AddTodoWrapper>
            )}
            
          </BottomContent>
        </Content>
        <Themes visible={themesVisible} name='planned' />
      </Container>
    )
}

export default Planned

const Container = styled.div`
  height: 100vh;
  width: calc(100% - 300px);
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 300px;

  ${({width}) => {
    if (width <= 768) {
      return `
        left: 0;
        width: 100%;
      `
    }
  }}
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

const SidebarMenu = styled(Menu)`
  position: fixed;
  cursor: pointer;
  margin: 10px 40px;
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

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 26px;
    font-weight: 500;
    letter-spacing: 0.8px;
    margin-left: 5px;
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
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;
`

const BottomContent = styled.div`
  width: 100%;
  margin-bottom: 10vh;
  height: 50px;
  background-color: rgba(0,0,0,0.333);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.49);
    cursor: pointer;
  }
`

const InputWrapper = styled.div`
  margin: 3px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 5px;

  input {
    height: 30px;
    width: 50vw;
    border: none;
    outline: none;
    background-color: transparent;
    color: whitesmoke;
    letter-spacing: 0.6px;

    &::placeholder {
      color: rgb(207, 195, 195);
      font-weight: 200;
      font-size: 14px;
    }
  }
`

const MenuIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 10px;
`

const MenuIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  cursor: pointer;

  &:hover {
    height: 100%;
    background-color: #615d5d;
    border-radius: 3px;
  }

  span {
    font-size: 14px;
    font-weight: 400;
  }
`

const AddTodoWrapper = styled(InputWrapper)`
  width: 100%;
  span {
    font-size: 15px;
    font-weight: 300;
  }
`