import React from 'react'
import styled from 'styled-components'

function UserProfile() {
    
    return (
        <Container>
            <Avatar>
                {/* <span>TC</span> */}
                <img src='/images/profiles/Louis.png' alt=''/>
            </Avatar>
            <UserInfo>
                <h4>Tinashe Calvin</h4>
                <p>iamtinashecalvin@gmail.com</p>
            </UserInfo>
        </Container>
    )
}

export default UserProfile

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 20px;
`

const Avatar = styled.div`
    height: 45px;
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;

    span {
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 1.6px
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    h4 {
        font-size: 16px;
        font-weight: 500;
    }

    p {
        font-size: 12px;
        font-weight: 400;
    }
`