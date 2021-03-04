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
            borderRadius: "15px !important",
            height:'200px',
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
        border:"5px solid white",
        borderRadius:"none",
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

    },
    datePaperPara:{
        color: "#666",
        fontWeight:"bold",
        fontSize:"0.7em",

    },
    myLink:{
        textDecoration:"none",
        color:"#222",
        fontSize:"1.5em",
        '&:hover': {
            color: "#ff005a",
        },
    },
    mainLink:{
        textDecoration:"none",


    }

}))

const Issue = (props)=>{
    const classes=useStyles();
    return (
        <a href={props.articleLink} className={classes.mainLink}>
            <Grid container spacing={2} className={classes.grid}>

                <Grid item  >
                    <Paper className={classes.transparentPaper}>
                        <img className={classes.image1}
                             style={{maxWidth:"100%",
                                 borderRadius:"20px",
                                 minHeight:"100%",
                                 objectFit: "cover",
                             }}
                             src={props.imageLink}
                             alt={props.title}
                             onError={props.addDefaultSrc}
                        />
                    </Paper>

                    <Paper className={classes.headingPaper}>
                        <h3 style={{ color:"#222", fontSize:"1em"}}>{props.title}</h3>
                    </Paper>

                    <Paper className={classes.datePaper}>
                        <p className={classes.datePaperPara}>{props.time}</p>
                    </Paper>

                </Grid>

            </Grid>
        </a>
    )
}

export default Issue;
