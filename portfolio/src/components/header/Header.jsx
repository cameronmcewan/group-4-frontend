import React from 'react'
import './header.css'
import logo from './../../img/logo.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>This is your</h5>
        <h1>PortFolio</h1>
        <h5 className="text-light">Create and buy a Folio token represented by any combination of crypto assets</h5>

        <div className="btc">
          <img src={logo} alt='btc' />
        </div>

        {/* link, type a then tab */}
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}


export default Header