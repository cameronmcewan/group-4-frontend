import React, {useState} from 'react';

function Navbar() {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)


  return (
    <div className='header'>
        {/* <Link to='/'><h1>GLX TRVL</h1></Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/explore'>Explore</Link>
            </li>
            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>
        </ul> */}
    </div>
  );
}

export default Navbar;