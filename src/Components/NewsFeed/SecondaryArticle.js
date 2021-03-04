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
        width:"150px",
        height:"100px",
        objectFit:"cover",
        borderRadius: "5px !important",
        [theme.breakpoints.down('sm')]: {
            position: 'inherit',
            width:"100%",
            height:"400px",
            objectFit: "cover",

        }
    },
    secondaryImage:{

    },
    grid:{
        backgroundColor:"transparent",
        borderRadius:"15px",
        transition: "0.2s",
        '&:hover': {
            backgroundColor: "rgba(8, 7, 7, 0.25)",
        },
    },
    mainLink:{
        textDecoration:"none ",


    },
    myLink:{
        textDecoration:"none",
        color:"#eee",
    }

}))

const SecondaryArticle = (props)=>{
    const classes=useStyles();
    return (
        <a href={props.articleLink} className={classes.mainLink}>
            <Grid container spacing={2} className={classes.grid}>

                <Grid className={classes.secondaryImage} item xs={12} md={6}>
                    <img className={classes.image1} src={props.imageLink} alt={props.title} onError={props.addDefaultSrc} />
                </Grid>
                <Grid className={classes.secondaryBody} item xs={12} md={6}>
                    <h5 style={{ color:"#eee",textAlign:"left", margin:'0px'}}>{props.title}</h5>
                </Grid>

            </Grid>
        </a>
    )
}

export default SecondaryArticle;
