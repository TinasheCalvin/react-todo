import React from 'react'
import styled from 'styled-components'
import { CircleOutlined, StarBorderOutlined } from '@mui/icons-material'

function Todo({todo}) {
  return (
    <Container>
        <TodoWrapper>
            <CircleOutlined fontSize='small'/>
            <span>{todo.description}</span>
        </TodoWrapper>
        <FavoriteIcon fontSize='small' />
    </Container>
  )
}

export default Todo

const Container = styled.div`
  width: 100%;
  margin: 5px 0px;
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

const FavoriteIcon = styled(StarBorderOutlined)`
  margin-right: 5px;
`