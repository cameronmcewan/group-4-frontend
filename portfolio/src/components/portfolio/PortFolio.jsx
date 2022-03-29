import React from 'react'
import './portfolio.css'
import {buy, callBuyContract} from './Buy'
import Sell from './Sell'
import Pie from './Pie'
import Header from '../header/Header'

const PortFolio = () => {
  return (
    <div className='pcontainer'>
        <h3 className='title'>FolioCoin1</h3>
        <Pie />
        <button className='button1 btn' onClick={buy}>Buy</button>
        <button className='button2 btn btn-primary' onClick={Sell}>Sell</button>

        
    </div>
  )
}

export default PortFolio