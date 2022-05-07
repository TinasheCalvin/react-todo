import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import {LightModeOutlined,StarOutlineOutlined,PersonOutline,HomeOutlined,ListAltOutlined} from '@mui/icons-material'

function Lists() {
    const location = useLocation()

    return (
        <Container>
            <Link to='/'>
                <ListItem className={location.pathname === '/' ? 'active' : ''}>
                    <MyDayIcon fontSize='small'/>
                    <span>My Day</span>
                </ListItem>
            </Link>
            <Link to='/important'>
                <ListItem className={location.pathname === '/important' ? 'active' : ''}>
                    <ImportantTasksIcon fontSize='small'/>
                    <span>Important</span>
                </ListItem>
            </Link>
            <Link to='/planned'>
                <ListItem className={location.pathname === '/planned' ? 'active' : ''}>
                    <PlannedTasksIcon fontSize='small'/>
                    <span>Planned</span>
                </ListItem>
            </Link>
            <Link to='/assigned'>
                <ListItem className={location.pathname === '/assigned' ? 'active' : ''}>
                    <AssignedTaskIcon fontSize='small'/>
                    <span>Assigned to me</span>
                </ListItem>
            </Link>
            <Link to='/tasks'>
                <ListItem className={location.pathname === '/tasks' ? 'active' : ''}>
                    <MyTasksIcon fontSize='small'/>
                    <span>Tasks</span>
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
    border: 1px solid transparent;
    border-radius: 3px;
    margin: 5px 0px;
    padding: 5px;
    height: 35px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 100ms cubic-bezier(0.1,0.7,0.3,0.1) 0s;

    &.active {
        background-color: #3f3b3b;
    }

    &:hover {
        background-color: #3f3b3b;
    }

    span {
        font-size: 14px;
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