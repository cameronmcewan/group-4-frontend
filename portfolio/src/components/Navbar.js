import React from "react";
import Logo from "../assets/logo-dark-no-bg.png";
import Metamask from "./Metamask";

function Navbar() {
  return (
    <div>
<<<<<<< HEAD
      <ul className="topnav">
        <a className="active" href="/">
          <img className="logo" src={Logo} alt="The Folio Logo" />
        </a>
        <li>
          <a href="explore">Explore</a>
        </li>
        <li>
          <a href="create">Create</a>
        </li>
        <li className="right">
          <Metamask />
        </li>
      </ul>
=======
      <UserContext.Provider value={userAddress}>
        <ul className='topnav'>
            <a className='active' href="/"><img className='logo' src={Logo} alt="The Folio Logo" /></a>
            <li><a href="explore">Explore</a></li>
            <li><a href="create">Create</a></li>
            <li className='right'>
              <button className='btn' onClick={MetaMaskClick}>{buttonText}
              {userAddress && ( // Only displays the div below if the user address has been set
                          <div>
                            <h3>Address: {userAddress}</h3>
                            <h3>Balance: {userBalance}</h3>
                          </div> )}
              </button>
            </li>
        </ul>
      </UserContext.Provider>
>>>>>>> main
    </div>
  );
}

export default Navbar;
