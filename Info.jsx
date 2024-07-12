import React from 'react';


export default function Info() {
  return (
    <div className='info--container'>
        <img src="/Images/Image_1.png" />
        <p className='name'>Laura Smith</p>
        <p className='role'>Frontend Developer</p>
        <a className='website'>laurasmith.website</a>
        <div className='button--container'>
          <button className='email'>
            Email
            <img src='/Icons/Email_Icon.png'/>
          </button>
          <button className='linkedin'>
            LinkedIn
            <img src='/Icons/LinkedIn_Icon.png'/>
          </button>
        </div>
    </div>
  )
}