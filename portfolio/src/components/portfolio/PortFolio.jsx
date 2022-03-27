import React from 'react'
import './portfolio.css'
import Buy from './Buy'
import Sell from './Sell'
import Pie from './Pie'
import Header from '../header/Header'

const PortFolio = () => {
  return (
    <div>
        <h5>This is your</h5>
        <h1>PortFolio</h1>
        <h5 className="text-light">Create and buy a Folio token represented by any combination of crypto assets</h5>
        <Pie />
        <Buy /> 
        <Sell /> 
    </div>
  )
}

export default PortFolio