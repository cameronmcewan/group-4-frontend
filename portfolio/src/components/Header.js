// ============= this file is currently redundant ========


import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../assets/logo-light-no-bg.png'
import { Link } from "react-router-dom";


// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(2)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

const Header = props => {

  const { history } = props;
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.up('sm'));
  // const isMobile = useMediaQuery(theme.breakpoints).down(('xs'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/"><img className="logo" src={Logo} alt="The Folio Logo" /></Link>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <nav style={{
                  borderBottom: "solid 1px",
                  paddingBottom: "1rem",
                }}> 
            <Link to="/explore">Explore</Link> |{" "}
            <Link to="/create">Create</Link>
          </nav>
          </Typography>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
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
                onClose={() => setAnchorEl(null)}
              >
                <MenuItem onClick={() => handleMenuClick('/')}>Profile</MenuItem>
                <MenuItem onClick={() => handleMenuClick('/Account')}>My account</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

// export default Header;
export default Header;