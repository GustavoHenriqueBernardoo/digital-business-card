import React from 'react'
// import profilePic from '../images/sample.png'
import profilePic from '../images/me.png'
import './Info.css'



export default function Info() {
  return (
    <div className="info">
      <img className="info-pic" src={profilePic} alt="profile pic"></img>
      <h3 className="info-name">Gustavo Bernardo</h3>
      <h4 className="info-role">Software Engineer</h4>
      <h5 className="info-mail">gustavobernardo@scrimba.com</h5>
      <div className="info-btn">
        <button className='btn-email'> <i class="ri-mail-line" style={{ widh: '10px' }} ></i>Email</button>
        <button className='btn-linkedin'> <i class="ri-linkedin-box-fill" style={{ width: '10px' }}></i>Linkedin</button>
      </div>
    </div >
  )
}
