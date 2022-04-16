import React from 'react';
import pielogo from '../assets/pie-logo1.svg';

const Explore = () => {
  return (
    <div>
        <h1>Explore popular Portfolios</h1>
        <h3>Search for the name of an existing Portfolio or token to filter the results</h3>
        <section>
          <h2>Section</h2>
          <h5>This is a section</h5>
          <img src={pielogo} alt="pie logo" />
        </section>
        <section>
          <h2>Another section</h2>
          <h5>Need to add these sections to show the background lol</h5>
        </section>
    </div>
  )
}

export default Explore