import React from 'react';
import Twitter_Icon from './Icons/Twitter_Icon.png';
import Facebook_Icon from './Icons/Facebook_Icon.png';
import Instagram_Icon from './Icons/Instagram_Icon.png';
import Github_Icon from './Icons/GitHub_Icon.png';


export default function Footer() {
  return (
    <div className='footer'>
      <button>
        <img src={Twitter_Icon} />
      </button>
      <button>
        <img src={Facebook_Icon} />
      </button>
      <button>
        <img src={Instagram_Icon} />
      </button>
      <button>
        <img src={Github_Icon} />
      </button>
    </div>
  )
}