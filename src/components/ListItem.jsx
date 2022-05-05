import React from 'react'
import styled from 'styled-components'

function ListItem() {
  return (
    <Container>ListItem</Container>
  )
}

export default ListItem

const Container = styled.li`
    border: 1px solid black;
    margin: 5px 0px;
    padding: 2px;
`