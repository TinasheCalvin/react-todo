import React from 'react'
import styled from 'styled-components'
import { CircleOutlined, StarBorderOutlined } from '@mui/icons-material'

function Todo({todo}) {
  return (
    <Container>
        <TodoWrapper>
            <CircleOutlined fontSize='small'/>
            <span>{todo}</span>
        </TodoWrapper>
        <StarBorderOutlined fontSize='small' />
    </Container>
  )
}

export default Todo

const Container = styled.div`
    width: 100%;
    margin: 10px 0px;
    height: 50px;
    background-color: rgba(0,0,0,0.333);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TodoWrapper = styled.div`
    margin: 3px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding-left: 5px;
`