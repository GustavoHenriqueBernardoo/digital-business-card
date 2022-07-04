import React from 'react'
import profilePic from '../images/sample.png'
// import profilePic from '../images/me.jpg'
import './Info.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function Info() {
  return (
    <div className="info">
      <img className="info-pic" src={profilePic} alt="profile pic"></img>
      <h3 className="info-name">Gustavo Bernardo</h3>
      <h4 className="info-role">Software Engineer</h4>
      <h5 className="info-mail">gustavobernardo@scrimba.com</h5>
      <div className="info-btn">
        <button>Email</button>
        <button>Linkedin</button>
      </div>
    </div>
  )
}
