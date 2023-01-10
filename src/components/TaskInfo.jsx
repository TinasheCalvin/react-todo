import React, { useContext } from 'react'
import styled from 'styled-components'
import { CloseRounded } from '@mui/icons-material'
import Todo from './Todo'
import TaskSpecs from './TaskSpecs'
import { TasksContext } from '../context/TasksContext'

function TaskInfo() {
    const { task, taskOpen, closeTaskView } = useContext(TasksContext)

    return (
        <Container taskOpen={taskOpen}>
            <CloseIcon fontSize='small' onClick={closeTaskView} />
            <Todo todo={task} />
            <TaskSpecs todo={task} />
        </Container>
    )
}

export default TaskInfo

const Container = styled.div`
    z-index: 2;
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
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