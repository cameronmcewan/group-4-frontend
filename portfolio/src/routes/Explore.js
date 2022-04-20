import * as React from 'react';
import './explore.css';
import { Link } from "react-router-dom";
const Explore = props => {
  return (
    <section>
      <input type={'text'} className='search' placeholder='Search'></input>
      <h3>Search for the name of an existing Portfolio or token to filter the results</h3>     
        <Link to="/detail">
        <div className='block center'>
          <h2>Example Portfolio 1</h2>
        </div>
        </Link>  
        <header className='block center'>
          <div>
            <h2>Example Portfolio 2</h2>
          </div>
        </header>
          <div className='block center'>
          <h2>Example Portfolio 3</h2>
          </div>
          <div className='block center'>
            <h2>Example Portfolio 4</h2>
          </div>
    </section>
  );
};

export default Explore