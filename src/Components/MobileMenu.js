import React from 'react';
import './css/SideMenu.css'
import TextField from "@material-ui/core/TextField";
import SearchIcon from '@material-ui/icons/Search';
import DateRangeIcon from '@material-ui/icons/DateRange';
import ComputerIcon from '@material-ui/icons/Computer';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PublicIcon from '@material-ui/icons/Public';
import MovieIcon from '@material-ui/icons/Movie';
import IconHolder from "./Partials/IconHolder";
import {Grid, InputAdornment} from "@material-ui/core";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    mobileMenuWrapper:{
        transition:".4s",
        backgroundColor:"white",
        "& p":{
            color:"black"
        },
        "& button":{
            margin:"20px 0 0 20px",
        },
        position: 'relative',
        animationName: 'example',
        animationDuration: '1s',
        animationFillMode: 'ease-in-out',
    }

}))

const MobileMenu = (props) => {
    const classes=useStyles();






    return (
        <Hidden >
            <Grid container  className={classes.mobileMenuWrapper}>


                <Grid xs={12} item className={"icons-wrapper"}>

                    <IconHolder icon={<ComputerIcon />} func={props.gotoTech} title={"Technology"}/>
                    <IconHolder icon={<AccountBalanceIcon />} func={props.gotoPolitics} title={"Politics"}/>
                    <IconHolder icon={<PublicIcon />} func={props.gotoScience} title={"Science"}/>
                    <IconHolder icon={<MovieIcon />} func={props.gotoEntertainment} title={"Entertainment"}/>
                </Grid>
            </Grid>
        </Hidden>
    );
}

export default MobileMenu