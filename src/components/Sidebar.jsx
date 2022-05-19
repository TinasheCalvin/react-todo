import React from 'react'
import styled from 'styled-components'
import Lists from './Lists'
import Search from './Search'
import UserProfile from './UserProfile'
import useWindowSize from '../hooks/useWindowSize'

function Sidebar() {
  const { width } = useWindowSize()

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
  width: 22.5%;
  height: 100%;
  padding: 20px;

`