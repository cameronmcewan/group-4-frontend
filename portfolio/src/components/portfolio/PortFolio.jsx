import React from 'react'
import './portfolio.css'
// import buy from './Buy'
import Sell from './Sell'
import Pie from './Pie'
import Header from '../header/Header'

const PortFolio = () => {
  return (
    <div className='pcontainer'>
        <h3 className='title'>FolioCoin1</h3>
        <Pie />
        <button className='button1 btn'>Buy</button>
        <button className='button2 btn btn-primary'>Sell</button>
    </div>
  )
}

export default <PortFolio></PortFolio>

// onClick={buy} onClick={Sell}