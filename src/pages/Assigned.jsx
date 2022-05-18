import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { nanoid } from 'nanoid'
import { formatISO } from 'date-fns'
import { PersonOutline,MoreHorizOutlined,AddOutlined,CircleOutlined,HomeOutlined,CalendarMonthOutlined,AlarmOnOutlined,EventRepeatOutlined } from '@mui/icons-material'
import HeroContent from '../components/HeroContent'
import Themes from '../components/Themes'
import { TasksContext } from '../context/TasksContext'

function Assigned() {
    const [input, setInput] = useState('')
    const [addTodo, setAddTodo] = useState(false)

    let creationDate = formatISO(new Date(), { representation: 'date' })

    // defining the state for the todo list
    const { themes, addTodoTask } = useContext(TasksContext)
  
    // defining state to show the themes wrapper
    const [themesVisible, setThemesVisible] = useState(false)

    function handleAddTodo() {
      let todo = {
        id: nanoid(),
        description: input,
        isComplete: false,
        isFavorite: false,
        creationDate: creationDate
      }
      addTodoTask(todo)
      // resetting the input
      setInput('')
      setAddTodo(false)
    }
  
    return (
      <Container>
        <Background>
          <img src={themes.assigned} alt="" />
        </Background>
        <Content>
          <TopContent>
            <HeadingContainer>
                <PersonOutline fontSize='medium' />
                <h1>Assigned to me</h1>
            </HeadingContainer>
            <MenuItems>
              <MoreHorizOutlined className='icon' onClick={() => setThemesVisible(!themesVisible)} />
            </MenuItems>
          </TopContent>
          <CenterContent>
            <HeroContent 
              description="Tasks assigned to you show up here."
              headerImage="/images/illustrations/design1.svg"
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
                    <MenuIcon>
                      <HomeOutlined />
                      <span>Tasks</span>
                    </MenuIcon>
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
        <Themes visible={themesVisible} name='assigned' />
      </Container>
    )
}

export default Assigned

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

const HeadingContainer = styled.div`
  display: flex;
  align-items: center;

  h1 {
    font-size: 24px;
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