import React, { useContext } from 'react'
import styled from 'styled-components'
import { CircleOutlined, CheckCircle, StarBorderOutlined, Star, VisibilityOutlined } from '@mui/icons-material'
import { TasksContext } from '../context/TasksContext'

function Todo({todo}) {
  const { addTaskToFavorites, removeFromFavorites, completeTodoTask, openTaskView, taskOpen, setTask } = useContext(TasksContext)

  function handleView() {
    openTaskView()
    setTask(todo)
  } 

  return (
    <Container>
      <TodoWrapper>
          {todo.isComplete ?
            <CheckCircle fontSize='small'/> :
            <CircleOutlined fontSize='small' onClick={() => completeTodoTask(todo)} />
          }
          <span>{todo.description}</span>
      </TodoWrapper>
      <IconsWrapper>
        {!taskOpen && <VisibilityOutlined fontSize='small' onClick={handleView} />}
        {todo.isImportant ?
          <Star fontSize='small' onClick={() => removeFromFavorites(todo)} /> :
          <StarBorderOutlined fontSize='small' onClick={() => addTaskToFavorites(todo)} />
        }
      </IconsWrapper>
      
    </Container>
  )
}

export default Todo

const Container = styled.div`
  width: 100%;
  margin: 5px 0px;
  padding-right: 5px;
  height: 50px;
  background-color: #252424;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: all 150ms ease-in;

  &:hover {
    background-color: #363434;
  }
`

const TodoWrapper = styled.div`
  margin: 3px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 5px;

  span {
    font-size: 14px;
    font-weight: 500;
  }
`

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`