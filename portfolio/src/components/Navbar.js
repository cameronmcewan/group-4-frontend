import React, {useState} from 'react';
// import React from 'react';
import Logo from '../assets/logo-dark-no-bg.png'

import './Navbar.css'
const jump = (url) =>{
  window.location.href=url;
}
function Navbar() {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  return (
    <header>
      <div className="container header__container">
        <div className='logo'>
            <img src={Logo} onClick={jump.bind(this,'/')}></img>
        </div>
        <div className='menu'>
            <ul className='topnav'>
              <li><a onClick={jump.bind(this,'/explore')}>Explore</a></li>
              <li><a onClick={jump.bind(this,'/create')}>Create</a></li>
            </ul>
        </div>
        <div className='right_button'>Connect your <br/> MetaMask account</div>
      </div>
    </header>
  );
}

export default Navbar
