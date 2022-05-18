import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {LightModeOutlined,StarOutlineOutlined,PersonOutline,HomeOutlined,ListAltOutlined} from '@mui/icons-material'
import { formatISO } from 'date-fns'
import { TasksContext } from '../context/TasksContext'

function Lists() {
    let location = useLocation()
    let { tasks } = useContext(TasksContext)
    let today = formatISO(new Date(), { representation: 'date'})

    let todayTasks = tasks.filter(task => task.creationDate === today)
    let favoriteTasks = tasks.filter(task => task.isFavorite === true)
    let incompleteTasks = tasks.filter(task => task.isComplete === false)

    return (
        <Container>
            <Link to='/'>
                <ListItem className={location.pathname === '/' ? 'active' : ''}>
                    <ListItemContent>
                        <MyDayIcon fontSize='small'/>
                        <span>My Day</span>
                    </ListItemContent>
                    {todayTasks.length > 0 && (
                        <TasksCount>
                            <span>{todayTasks.length}</span>
                        </TasksCount>
                    )}
                </ListItem>
            </Link>
            <Link to='/important'>
                <ListItem className={location.pathname === '/important' ? 'active' : ''}>
                    <ListItemContent>
                        <ImportantTasksIcon fontSize='small'/>
                        <span>Important</span>
                    </ListItemContent>
                    {favoriteTasks.length > 0 && (
                        <TasksCount>
                            <span>{favoriteTasks.length}</span>
                        </TasksCount>
                    )}
                </ListItem>
            </Link>
            <Link to='/planned'>
                <ListItem className={location.pathname === '/planned' ? 'active' : ''}>
                    <ListItemContent>
                        <PlannedTasksIcon fontSize='small'/>
                        <span>Planned</span>
                    </ListItemContent>
                </ListItem>
            </Link>
            <Link to='/assigned'>
                <ListItem className={location.pathname === '/assigned' ? 'active' : ''}>
                    <ListItemContent>
                        <AssignedTaskIcon fontSize='small'/>
                        <span>Assigned to me</span>
                    </ListItemContent>
                </ListItem>
            </Link>
            <Link to='/tasks'>
                <ListItem className={location.pathname === '/tasks' ? 'active' : ''}>
                    <ListItemContent>
                        <MyTasksIcon fontSize='small'/>
                        <span>Tasks</span>
                    </ListItemContent>
                    {incompleteTasks.length > 0 && (
                        <TasksCount>
                            <span>{incompleteTasks.length}</span>
                        </TasksCount>
                    )}
                </ListItem>
            </Link>
        </Container>
    )
}

export default Lists

const Container = styled.div`
    margin: 0px;

    a {
        text-decoration: none;
    }
`

const ListItem = styled(Container)`
    border: none;
    border-radius: 3px;
    margin: 5px 0px;
    padding: 5px;
    height: 35px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 100ms cubic-bezier(0.1,0.7,0.3,0.1) 0s;
    position: relative;

    &.active {
        background-color: #3f3b3b;

        &::before {
            content: '';
            position: absolute;
            top: 25%;
            left: 0;
            right: 0;
            margin: 0;
            height: 50%;
            width: 2px;
            background-color: rgb(115,193,241);
            border-radius: 2px;
        }
    }

    &:hover {
        background-color: #3f3b3b;
    }

    span {
        font-size: 14px;
    }
`

const ListItemContent = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    gap: 20px
`

const TasksCount = styled.div`
    background-color: #282828;
    padding: 3px;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 10px;
        font-weight: 400;
    }
`

const MyDayIcon = styled(LightModeOutlined)`
    margin-left: 5px;
`

const ImportantTasksIcon = styled(StarOutlineOutlined)`
    margin-left: 5px;
    font-size: 16px;
`

const PlannedTasksIcon = styled(ListAltOutlined)`
    margin-left: 5px;
    font-size: 16px;
`

const AssignedTaskIcon = styled(PersonOutline)`
    margin-left: 5px;
    font-size: 16px;
`

const MyTasksIcon = styled(HomeOutlined)`
    margin-left: 5px;
`