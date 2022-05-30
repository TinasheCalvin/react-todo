import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import Lists from './Lists'
import Search from './Search'
import UserProfile from './UserProfile'
import { TasksContext } from '../context/TasksContext'
import useWindowSize from '../hooks/useWindowSize'

function Sidebar() {
  const { width } = useWindowSize()
  const {sidebarOpen} = useContext(TasksContext)
  console.log(sidebarOpen)
  console.log(width)

  return (
    <Container width={width}>
      <UserProfile />
      <Search />
      <Lists />
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
  // flex: 1;
  width: 300px;
  height: 100%;
  padding: 20px;
  
`