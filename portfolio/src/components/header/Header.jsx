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
      </div>
    </header>
  )
}

export default Header