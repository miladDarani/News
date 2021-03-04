import React from 'react';

import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    numIcon:{
        color:"#60f1a3",
        border: "2px solid #60f1a3",
        borderRadius: "100px",
        maxHeight:"50px",
        display:"flex",
        marginRight: theme.spacing(2),
        alignItems:"center",
    },
    body:{
        color:"white",
    },
    date:{
        color:"#888",
        textAlign:"left",
        fontWeight:"bold",
        fontSize:".8em",
    },
    mainLink:{
        textDecoration:"none",
    }

}))

const TrendStory = (props)=>{
    const classes=useStyles();
    return (
        <a href={props.articleLink} className={classes.mainLink}>
        <Grid container  className={classes.grid} >
            <Grid className={classes.numIcon}  xs={2} item ><h1 style={{margin:"0 auto"}}>{props.num}</h1></Grid>
            <Grid className={classes.body}  item xs={9}>
                <h4 style={{marginTop:"0", textAlign:"left"}}>{props.title}</h4>
                <Grid className={classes.date} item xs={12}>{props.time}</Grid>
            </Grid>

        </Grid>
        </a>
    )
}

export default TrendStory;
