import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { format, formatISO } from 'date-fns'
import { TipsAndUpdatesOutlined,MoreHorizOutlined,AddOutlined,CircleOutlined,HomeOutlined,CalendarMonthOutlined,AlarmOnOutlined,EventRepeatOutlined,Menu } from '@mui/icons-material'
import HeroContent from '../components/HeroContent'
import Todo from '../components/Todo'
import Themes from '../components/Themes'
import { TasksContext } from '../context/TasksContext'
import useWindowSize from '../hooks/useWindowSize'

function MyDay() {
  let today = new Date()
  let { tasks, addTodoTask, themes, sidebarOpen, openSidebar } = useContext(TasksContext)
  let { width } = useWindowSize()
  
  const [input, setInput] = useState('')
  const [addTodo, setAddTodo] = useState(false)

  let creationDate = formatISO(today, { representation: 'date'})

  // defining state to show the themes wrapper
  const [themesVisible, setThemesVisible] = useState(false)

  // defining the state for the task info wrapper
  const [taskVisible, setTaskVisible] = useState(false)

  let todos = tasks.filter(task => formatISO(new Date(task.createdAt), { representation: 'date'}) === creationDate && task.isComplete === false)

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
        <img src={themes.myDay} alt="" />
      </Background>
      {(width <= 768 && !sidebarOpen) && <SidebarMenu fontSize='small' onClick={openSidebar}/>}
      <Content taskVisible={taskVisible}>
        <TopContent>
          <DateContainer>
            <h1>My Day</h1>
            <p>{format(today, "eeee")}, {format(today, "dd")} {format(today, "LLLL")}</p>
          </DateContainer>
          <MenuItems>
            <TipsAndUpdatesOutlined className='icon'/>
            <MoreHorizOutlined className='icon' onClick={() => setThemesVisible(!themesVisible)} />
          </MenuItems>
        </TopContent>
        <CenterContent taskCount={todos.length}>
          {todos.length === 0 && 
            <HeroContent 
              title="Focus on your day"
              description="Get things done with My Day, a list that refreshes every day."
              headerImage="/images/illustrations/add-tasks.svg"
            />
          }
          {todos.map((todo,index) => (
            <Todo key={index} todo={todo} />
          ))}
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
      <Themes visible={themesVisible} name='myDay' />
      {/* <TaskInfo visible={taskVisible} /> */}
    </Container>
  )
}

export default MyDay

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

const SidebarMenu = styled(Menu)`
  position: fixed;
  cursor: pointer;
  margin: 10px 40px;
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
  width: 100%;
  display: flex;
  flex-direction:column;
  align-items: center;

  ${({taskCount}) => {
    if (taskCount > 0) {
      return `
        flex: 1;
        margin-top: 30px;
      `
    }
  }}
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