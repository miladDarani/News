import React from 'react';
import '../css/MainArticle.css'
import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    paper:{
        padding: theme.spacing(2),
        textAlign: 'center',
        background:"transparent",

    },
    image1:{
        maxWidth: "100%",
        borderRadius: "5px !important",
        height:'400px',
        width:"100%",
    },
    grid:{
        backgroundColor:"transparent",
        borderRadius:"15px",
        transition: "0.2s",
        '&:hover': {
            backgroundColor: "rgba(8, 7, 7, 0.25)",
        },
    },
    transparentPaper:{
        backgroundColor: "transparent",
        boxShadow:"none",
    },
    headingPaper:{
        backgroundColor: "transparent",
        boxShadow:"none",
        textAlign:"left",
    },
    datePaper:{
        backgroundColor: "transparent",
        boxShadow:"none",
        textAlign:"left",
        position:"absolute",
        bottom:"0",

    },
    datePaperPara:{
        color: "#666",
        fontWeight:"bold",
        fontSize:"0.7em",


    },
    myLink:{
        textDecoration:"none",
        color:"#eee",
        fontSize:"1.5em",
        '&:hover': {
            color: "#ff005a",
        },
    },
    mainLink:{
        textDecoration:"none",


    },
    paperWrapper:{
        position:"relative",
        width:"100%",
    }

}))

const MainArticle = (props)=>{
    const classes=useStyles();
    return (
        <Grid>
        <a href={props.articleLink} className={classes.mainLink}>
        <Grid container spacing={2} className={classes.grid}>

            <Grid item  className={classes.paperWrapper}>
                <Paper className={classes.transparentPaper}>

                        <img className={classes.image1}
                             onError={props.addDefaultSrc}
                             style={{maxWidth:"100%",
                                 borderRadius:"20px",
                             }}
                             src={props.imageLink} alt={props.title}/>

                </Paper>
                <div style={{position:"relative", minHeight:"150px"}}>
                <Paper className={classes.headingPaper}>
                    <h3 style={{ color:"#eee"}}>{props.title}</h3>
                </Paper>
                <Paper className={classes.datePaper}>
                    <p className={classes.datePaperPara}>{props.time}</p>
                </Paper>
                </div>
            </Grid>

        </Grid>
        </a>
        </Grid>
    )
}

export default MainArticle;
