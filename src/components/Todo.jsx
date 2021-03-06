import React, { useContext } from 'react'
import styled from 'styled-components'
import { CircleOutlined, CheckCircle, StarBorderOutlined, Star } from '@mui/icons-material'
import { TasksContext } from '../context/TasksContext'

function Todo({todo}) {
  const { addTaskToFavorites, removeFromFavorites, completeTodoTask } = useContext(TasksContext)

  return (
    <Container>
      <TodoWrapper>
          {todo.isComplete ?
            <CheckCircle fontSize='small'/> :
            <CircleOutlined fontSize='small' onClick={() => completeTodoTask(todo.id)} />
          }
          <span>{todo.description}</span>
      </TodoWrapper>
      {todo.isFavorite ?
        <Star fontSize='small' onClick={() => removeFromFavorites(todo.id)} /> :
        <StarBorderOutlined fontSize='small' onClick={() => addTaskToFavorites(todo.id)} />
      }
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