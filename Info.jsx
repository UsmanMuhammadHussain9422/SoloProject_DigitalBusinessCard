import React from 'react';
import Profile_Photo from './Images/Image_1.png'
import Email_Icon from './Icons/Email_Icon.png';
import LinkedIn_Icon from './Icons/LinkedIn_Icon.png';

export default function Info() {
  return (
    <div className='info--container'>
      <img src={Profile_Photo} />
      <p className='name'>Laura Smith</p>
      <p className='role'>Frontend Developer</p>
      <a className='website'>laurasmith.website</a>
      <div className='button--container'>
        <button className='email'>
          Email
          <img src={Email_Icon} />
        </button>
        <button className='linkedin'>
          LinkedIn
          <img src={LinkedIn_Icon} />
        </button>
      </div>
    </div>
  )
}