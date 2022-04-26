import React, { useState, useContext } from "react";
import { UserContext } from "../helpers/UserContext";
import { ethers } from "ethers";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MetaMask = () => {
  const [buttonText, setButtonText] = useState("Connect to MetaMask");
  const [userBalance, setUserBalance] = useState();
  const userContext = useContext(UserContext);

  const handleButtonClick = () => {
    connectWalletHandler();
    changeText("You are connected to your MetaMask wallet");
  };

  const changeText = (text) => {
    setButtonText(text);
  };

  const connectWalletHandler = () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      userContext.setSigner(provider.getSigner());
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          userContext.setAddress(result[0]);
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

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FormGroup>
        <FormControlLabel
          control={
          <button className="btn-cta metamask" onClick={handleButtonClick}>
            {buttonText}
          </button>
          }
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleMenu}
        />
      </FormGroup>
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}>
      <MenuItem onClick={handleClose}>
      {userContext.address && ( // Only displays the div below if the user address has been set
        <div>
          <h6>Address: {userContext.address}</h6>
          </div>
      )}
      </MenuItem>
      <MenuItem onClick={handleClose}>
      {userContext.address && ( // Only displays the div below if the user address has been set
        <div>
          <h6>Balance: {userBalance}</h6>
        </div>      
        )}
        </MenuItem>
    </Menu>
    </>
  );
};

export default MetaMask;
