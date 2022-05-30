import React, { useContext } from 'react'
import styled from 'styled-components'
import { CloseRounded } from '@mui/icons-material'
import Lists from './Lists'
import Search from './Search'
import UserProfile from './UserProfile'
import { TasksContext } from '../context/TasksContext'
import useWindowSize from '../hooks/useWindowSize'

function Sidebar() {
  const { width } = useWindowSize()
  const { sidebarOpen, closeSidebar } = useContext(TasksContext)

  return (
    <Container width={width} sidebarOpen={sidebarOpen}>
      {(width <= 768 && sidebarOpen) && <CloseIcon fontSize='small' onClick={closeSidebar} />}
      <UserProfile />
      <Search />
      <Lists />
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  width: 300px;
  height: 100%;
  padding: 20px;
  background-color: #181818;
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 500ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  ${({width,sidebarOpen}) => {
    if (width <= 768 && !sidebarOpen) {
      return `
        left: -100%;
      `
    }
  }}
`

const CloseIcon = styled(CloseRounded)`
  float: right;
  margin-bottom: 10px;
  cursor: pointer;
`