import React from 'react';
import { Container } from '@mui/material';
import Pie from '../components/pie/Pie';  //pie components
import './create.css'
const Create = () => {
  return (
    <div>
        <h1>Create a new Portfolio</h1>
        <Container fixed style={{backgroundColor:"skyblue"}}>
            <h2>This is in the Material UI container</h2>
        </Container>
        
        {/* Imported the pie component, which is the page previously written */}
        <div className='pie'>  
          <Pie></Pie>
        </div>
    </div>
  )
}

export default Create