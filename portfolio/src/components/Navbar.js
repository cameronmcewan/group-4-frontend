import React, {useState} from 'react';
import Logo from '../assets/logo-dark-no-bg.png'

function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div>
        <ul className='topnav'>
            <a className='active' href="/"><img className='logo' src={Logo} alt="The Folio Logo" /></a>
            <li><a href="explore">Explore</a></li>
            <li><a href="create">Create</a></li>
            <li className='right'><a href="connect">Connect to MetaMask</a></li>
        </ul>
    </div>
  );
}

export default Navbar;