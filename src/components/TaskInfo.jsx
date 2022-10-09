import React, { useContext } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { CloseRounded } from '@mui/icons-material'
import Todo from './Todo'
import { TasksContext } from '../context/TasksContext'

function TaskInfo({visible}) {
    const { taskOpen, closeTaskView } = useContext(TasksContext)

    let todo = {
        description: 'Sample Task',
        isComplete: false,
        isImportant: true
    }

    return (
        <Container taskOpen={taskOpen}>
            <CloseIcon fontSize='small' onClick={closeTaskView} />
            <Todo todo={todo} />
        </Container>
    )
}

export default TaskInfo

const fadeInTop = keyframes`
    0% {
        transform: translateY(-20px)
    }

    100% {
        transform: translateY(0)
    }
`

const Container = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    padding: 10px;
    background-color: #181818;
    display: none;
    transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    ${({taskOpen}) => {
        if (taskOpen) {
            return `
                display: block;
            `
        }
    }}
`

const CloseIcon = styled(CloseRounded)`
  float: right;
  margin-bottom: 10px;
  cursor: pointer;
`