<<<<<<< HEAD:portfolio/src/routes/Landing.js
import React from "react";

const Landing = () => {
  return (
    <div>
      <h1>Welcome to Folio!</h1>
      <h3>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
        consectetur vero at, porro rerum laudantium, maxime, doloremque ratione
        doloribus adipisci inventore nesciunt quae nulla corrupti saepe
        consequuntur modi magni quod.
      </h3>
    </div>
  );
};
=======
import React from 'react';
import Logo from '../assets/logo-light-no-bg.png';

const Landing = () => {
  return (
    <>
    <section>
        <h1>Welcome to Folio!</h1>
        <h3>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia consectetur vero at, porro rerum laudantium, maxime, doloremque ratione doloribus adipisci inventore nesciunt quae nulla corrupti saepe consequuntur modi magni quod.</h3>
      <img src={Logo} alt="logo" />
    </section>
    <section>
      <h1>More stuff</h1>
    </section>

    </>
  )
}
>>>>>>> main:portfolio/src/routes/Welcome.js

export default Landing;
