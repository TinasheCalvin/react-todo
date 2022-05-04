import React from 'react'
import styled from 'styled-components'
import Search from './Search'
import UserProfile from './UserProfile'

function Sidebar() {
  return (
    <Container>
        <UserProfile />
        <Search />
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 20px;
`