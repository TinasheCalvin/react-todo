import React from 'react'
import './profile.scss';

function Profile() {
  return (
    <div className="profile">
        <div className="top">
            <div className="left">
                <div>TM</div>
            </div>
            <div className="right">
                <h4>Tinashe Makara</h4>
                <span>iamcalvin@gmail.com</span>
            </div>
        </div>
        <input type="text" className="search" />
    </div>
  )
}

export default Profile