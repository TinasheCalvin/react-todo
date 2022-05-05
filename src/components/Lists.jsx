import React from 'react'
import styled from 'styled-components'
import {MdLightMode} from 'react-icons/md'
import {AiOutlineStar} from 'react-icons/ai'
import {CgHome} from 'react-icons/cg'
import {BsListTask,BsPerson} from 'react-icons/bs'

function Lists() {
  return (
    <Container>
        <ListItem>
            <MdLightMode className='icon'/>
            <span>My Day</span>
        </ListItem>
        <ListItem>
            <AiOutlineStar className='icon'/>
            <span>My Day</span>
        </ListItem>
        <ListItem>
            <BsListTask className='icon'/>
            <span>My Day</span>
        </ListItem>
        <ListItem>
            <BsPerson className='icon'/>
            <span>My Day</span>
        </ListItem>
        <ListItem>
            <CgHome className='icon'/>
            <span>My Day</span>
        </ListItem>
    </Container>
  )
}

export default Lists

const Container = styled.div`
    margin: 0px;
`

const ListItem = styled(Container)`
    border: 1px solid black;
    margin: 5px 0px;
    padding: 5px;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 20px;
`