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


}))

const SideMenu = (props) => {
    const classes=useStyles();






    return (
        <Hidden only={['xs','sm']}>
        <Grid container>
            <Grid item xs={12} style={{marginBottom:"90px", marginTop:"30px"}}>

                <TextField
                    className={"text-custom"}
                    id="outlined-search"
                    label={<SearchIcon label={"Search"}/>}
                    type="search"
                    variant="outlined"
                    onKeyDown={props.searchQuery}
                />
            </Grid>

            <Grid xs={12} item className={"icons-wrapper"}>


                <IconHolder icon={<ComputerIcon />} gotoPage={props.gotoPage} title={"Technology"}/>
                <IconHolder icon={<AccountBalanceIcon />} gotoPage={props.gotoPage} title={"Politics"}/>
                <IconHolder icon={<PublicIcon />} gotoPage={props.gotoPage} title={"Science"}/>
                <IconHolder icon={<MovieIcon />} gotoPage={props.gotoPage} title={"Entertainment"}/>
            </Grid>
        </Grid>
        </Hidden>
    );
}

export default SideMenu