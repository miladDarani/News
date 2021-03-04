import React, { useState } from 'react';

import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Collapse from '@material-ui/core/Collapse';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NotificationsOffIcon from '@material-ui/icons/NotificationsOff';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from '@material-ui/icons/Settings';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import AutoSearch from './Partials/AutoSearch'
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles(theme => ({
  appBar: {
    boxShadow: '0 1px 8px rgba(0,0,0,.3)',
    position: 'relative',
    color:"black",
    backgroundColor: "#ff005a",
    padding:"4px 0 10px 0",
    zIndex: theme.zIndex.drawer + 100,
    [theme.breakpoints.down('sm')]: {
      position: 'inherit'
    }
  },
  toolBar: {
    paddingLeft: "3px",
    paddingRight: "3px",
    justifyContent:"space-between"

  },
  branding: {
    display: 'flex',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    margin: 'auto 0',
    lineHeight: '50px',
    padding: `0 64px 0 0`
  },
  logo: {
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '80px'
    },
    "& h2":{
      color:"white !important"
    }
  },
  searchWrapper: {

    boxSizing: ' border-box',
    backgroundColor:"transparent",
    alignSelf:"center",
    borderRadius:"10px",
    padding: "0 10px",
    height:"50px",
    width:"300px",
    "& svg":{
      color:"black !important",
    },
    "& icon":{
      display:"none",
    }

  },
  searchForm: {
    background: 'white',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginRight: "5px",
    display: 'block',
    maxWidth: '800px',

  },
  searchInput: {
    fontSize: '1rem',
    padding: "5px",
    [theme.breakpoints.down('xs')]: {
      padding: "5px"
    },

    cursor: 'text',
    textIndent: '30px',
    border: 'none',
    background: 'transparent',
    width: '100%',
    outline: '0'
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    left: '0',
    marginTop: '-24px',
    color: 'rgba(0,0,0,.87)'
  },
  burger:{
    fontSize:"1em",

    "& svg": {
      fontSize:"2.5rem",
      marginRight:"20px",
      color:"white",
    }
  },
  textCustom:{
    backgroundColor:"red",
    "& input": {
      backgroundColor:"white !important"
    }
  }
}));

const Header = (props) => {

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [searchExpanded, setSearchExpanded] = useState(false);



  return (
    <AppBar position="static" className={classes.appBar}>

      <Toolbar className={classes.toolBar}>
        <div className={"menu-left"} style={{display:"flex", width:"100%", justifyContent:"space-between"}}>
          <div>
            <h1 style={{color:"white", fontFamily:"sora", paddingLeft:"10px"}} >BNN</h1>
          </div>
          <div className={classes.searchWrapper}>
            <TextField
                className={classes.textCustom}
                id="outlined-search"
                label={<SearchIcon label={"Search"}/>}
                type="search"
                variant="outlined"
                onKeyDown={props.searchQuery}
            />
          </div>


        <Hidden smUp>
          <span className="flexSpacer" />
        </Hidden>


        </div>
        {/*----------------------------------*/}

        <Menu
          id="user-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}

        >
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <NotificationsOffIcon />
            </ListItemIcon>
            <ListItemText primary="Disable notifications" />
          </MenuItem>
          <MenuItem >
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary="Sign out" />
          </MenuItem>
        </Menu>
      </Toolbar>


    </AppBar>
  );
};

Header.prototypes = {
  logo: PropTypes.string,
  logoAltText: PropTypes.string
};

export default Header;
