import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, Grid} from "@material-ui/core";
import DateRangeIcon from '@material-ui/icons/DateRange';
import ComputerIcon from '@material-ui/icons/Computer';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PublicIcon from '@material-ui/icons/Public';
import MovieIcon from '@material-ui/icons/Movie';



const useStyles = makeStyles(theme => ({
    bottomMenuWrapper:{
        display:"flex",
        flexDirection:"row",
        "& div":{
            padding: theme.spacing(),


        },
        "& p":{
            color:"#555",
            fontWeight:"300",
            fontSize:"12px",

        },
        "& svg":{
            color:"#555"
        },
        "& div:hover":{
            backgroundColor:"#ff005a !important",
            cursor:"pointer",

        },
        "& div:hover p":{
            color:"white",
            fontWeight:"600"
        },
        "& div:hover svg" :{
            color:"white"
        },
        "& div:active":{
            backgroundColor:"#ff005a",
            cursor:"pointer",
        },
        "& div:active p":{
            color:"white",
            fontWeight:"600"
        },
        "& div:active svg" :{
            color:"white"
        },
        "& button span" :{
            display:"flex",
            flexDirection:"column",
            paddingTop:"15px"
        },
    },
    mobileIcon:{
        width: "100%",
        paddingTop:"23px",
        "&:hover":{
            backgroundColor:"#ff005a",
            cursor:"pointer",
            color:"white",
            "&:active":{
                backgroundColor:"#ff005a",
                cursor:"pointer",
                color:"white",
            },

            "& svg":{
                color:"white"
            },
            "& p":{
                color:"green",
            }

        },

    },
    containerMain:{
        height:"100%",
    }
}));

const BottomMenu = (props) => {

    const classes = useStyles();


    return (
        <Grid container className={classes.containerMain}>

            <Grid item xs={3} className={classes.bottomMenuWrapper} onClick={props.gotoTech}>
                <myButton className={classes.mobileIcon} >
                    <ComputerIcon />
                    <p>Tech</p>
                </myButton>
            </Grid>
            <Grid item xs={3} className={classes.bottomMenuWrapper} onClick={props.gotoPolitics}>
                <myButton className={classes.mobileIcon} >
                    <AccountBalanceIcon />
                    <p>Politics</p>
                </myButton>
            </Grid>
            <Grid item xs={3} className={classes.bottomMenuWrapper} onClick={props.gotoScience}>
                <myButton className={classes.mobileIcon} >
                    <PublicIcon />
                    <p>Science</p>
                </myButton>
            </Grid>
            <Grid item xs={3} className={classes.bottomMenuWrapper} onClick={props.gotoEntertainment}>
                <myButton className={classes.mobileIcon} >
                    <MovieIcon />
                    <p>Entertainment</p>
                </myButton>
            </Grid>

        </Grid>
    );
};



export default BottomMenu;
