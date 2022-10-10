import React, { useContext } from 'react'
import styled from 'styled-components'
import { LightModeOutlined, AccessAlarmOutlined, CalendarMonthOutlined, EventRepeatOutlined } from '@mui/icons-material'
import { TasksContext } from '../context/TasksContext'

function TaskSpecs({todo}) {
    const { addTaskToFavorites } = useContext(TasksContext)

    return (
        <>
            <Container>
                <SpecWrapper>
                    <TodoWrapper onClick={() => addTaskToFavorites(todo)}>
                        <LightModeOutlined fontSize='small' />
                        <span>Add To My Day</span>
                    </TodoWrapper>
                </SpecWrapper>
            </Container>
            <Container>
                <SpecWrapper>
                    <TodoWrapper>
                        <AccessAlarmOutlined fontSize='small' />
                        <span>Remind Me</span>
                    </TodoWrapper>
                </SpecWrapper>
                <SpecWrapper>
                    <TodoWrapper>
                        <CalendarMonthOutlined fontSize='small' />
                        <span>Add Due Date</span>
                    </TodoWrapper>
                </SpecWrapper>
                <SpecWrapper>
                    <TodoWrapper>
                        <EventRepeatOutlined fontSize='small' />
                        <span>Repeat</span>
                    </TodoWrapper>
                </SpecWrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 10px 0px;
    padding: 2px;
    border-radius: 5px;
    background-color: #252424;
`

const SpecWrapper = styled.div`
    width: 100%;
    margin: 0px;
    padding-right: 5px;
    height: 40px;
    background-color: #252424;
    border-radius: 5px;
    border-bottom: 1px solid #3f3b3b;
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
        font-size: 13px;
        font-weight: 400;
    }
`

export default TaskSpecs