import React, {useState} from 'react'
import styled from 'styled-components'

function Search() {
    const [focus, setFocus] = useState(false)

    return (
        <Container className={focus ? 'focus' : ''}>
            <input type="search" placeholder="Search" onFocus={() => setFocus(!focus)}/>
            <button>Y</button>
        </Container>
    )
}

export default Search

let Container = styled.div`
    margin: 20px 0px;
    display: flex;
    margin-right: 10px;
    border: 1px solid #999;
    border-radius: 5px;
    height: 40px;

    &.focus {
        border-bottom: 4px solid blue;
    }

    input {
        flex: 1;
        padding: 10px;
        border: none;
        outline: none;
        background-color: transparent;
        color: whitesmoke;
    }

    button {
        margin: 5px;
        background-color: transparent;
        width: 30px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`