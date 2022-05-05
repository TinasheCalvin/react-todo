import React from 'react'
import styled from 'styled-components'
import {VscSearch} from 'react-icons/vsc'

function Search() {

    return (
        <Container>
            <input type="search" placeholder="Search" />
            <button>
                <VscSearch className="icon"/>
            </button>
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

    input {
        flex: 1;
        padding: 10px;
        margin: 5px;
        border: none;
        outline: none;
        background-color: transparent;
        color: whitesmoke;
        font-weight: 400;
        transform: scale(1);
        transition: 250ms ease-in 0s;

        &:focus {
            transform: scale(1.05)
        }
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        margin: 5px;
        background-color: transparent;
        border-radius: 5px;
        border: none;
        transition: all 0.5s ease-out;
        cursor: pointer;

        &:hover {
            background-color: #282828;
        }

        .icon {
            font-size: 12px;
        }
    }
`