import React, { useContext } from 'react'
import styled from 'styled-components'
import { CircleOutlined, StarBorderOutlined, Star } from '@mui/icons-material'
import { TasksContext } from '../context/TasksContext'

function Todo({todo}) {
  const { addTaskToFavorites } = useContext(TasksContext)
  
  return (
    <Container>
        <TodoWrapper>
            <CircleOutlined fontSize='small'/>
            <span>{todo.description}</span>
        </TodoWrapper>
        {todo.isFavorite ?
          <Star fontSize='small' /> :
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
`

// const FavoriteIcon = styled(StarBorderOutlined)`
//   margin-right: 5px;
// `