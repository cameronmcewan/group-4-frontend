import React, {useState} from 'react';
import Logo from '../assets/logo-dark-no-bg.png'
import { ethers} from 'ethers';
import { UserContext } from '../helpers/UserContext';


function Navbar() {

  const MetaMaskClick = () => {
    connectWalletHandler();
    changeText("You are connected to MetaMask");
  };

  const[click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [userAddress, setUserAddress] = useState();
  const [userBalance, setUserBalance] = useState();

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          setUserAddress(result[0]);
          getUserBalance(result[0]);
        });
    } else {
      window.alert("Please install MetaMask");
    }
  };

  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
      });
  };

  const [buttonText, setButtonText] = useState("Connect to MetaMask"); 
  const changeText = (text) => setButtonText(text);

  return (
    <div>
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
    </div>
  );
}

export default Navbar;