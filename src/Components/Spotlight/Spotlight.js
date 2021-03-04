import React from 'react';
import {Grid, Paper} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
import MyButton from "../Partials/MyButton";


const useStyles = makeStyles((theme)=>({
    banner:{
        margin:"0",
        padding:theme.spacing(7),

    },
    spotWrapper:{
        background:"lightgray",
        minHeight:"200px",
        paddingBottom:"30px",
    },
    banner_h3:{
        color:"#ff005a",
        textAlign:"left",
        margin:"0px",
    },
    banner_h1:{
        color:"#ff005a",
        textAlign:"left",
        fontFamily:"Assistant, sans-serif",
        margin:"0px",
        fontSize:"2.2em",
        textTransform:"capitalize",

    },
    articleWrapper:{

        margin: theme.spacing(3),
        minHeight:"200px",
        borderRadius:"10px",
        marginTop: "0px",
        display:"flex",
        [theme.breakpoints.down('xs')]: {
            flexDirection:"row",
        },

    },
    spotImage:{
        maxWidth:"100%",
        borderTopLeftRadius:"10px",
        borderBottomLeftRadius:"10px",
        objectFit: "cover",
        minHeight:"100%",
        [theme.breakpoints.down('sm')]: {
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
        },

    },
    spotHeading:{
        textAlign:"left",
        color:"white",
        fontFamily: "'Work Sans', sans-serif",
    },
    articleBody:{
        padding: theme.spacing(2),
        backgroundColor: "#fc3455",
        borderTopRightRadius:"10px",
        borderBottomRightRadius:"10px",
        [theme.breakpoints.down('sm')]: {
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
        },
    },
    articleBodyP:{
        textAlign:"left",
        color: "white",
        fontWeight:"400",
        fontSize:"1.2em",
    },
    caps:{
        textTransform:"capitalize",
    },
    spanQuery:{
        textDecoration:"underline"
    }

}))


const Spotlight = (props) => {
    const classes=useStyles();


    const {list,query} = props;


    return (
        <Grid container className={classes.spotWrapper}>


            <Grid item className={classes.banner} xs={12}>
                <h3 className={classes.banner_h3}>SPOTLIGHT</h3>
                <h1 className={classes.banner_h1 }>Best of <span className={classes.spanQuery}>{query} </span>news</h1>
            </Grid>

            <Grid  container className={classes.articleWrapper}>
                    <Grid item xs={12} md={8}>
                        <img className={classes.spotImage} src="https://images.unsplash.com/photo-1491403938640-b57372002c94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="as"/>
                    </Grid>
                    <Grid item xs={12} md={4} className={classes.articleBody}>
                        <h1 className={classes.spotHeading}>{props.title}</h1>
                        <p className={classes.articleBodyP}>{props.description}</p>
                        <Grid>
                            <MyButton link={props.articleLink} title={"Read the article"} />
                        </Grid>
                    </Grid>

            </Grid>



        </Grid>
    );
}

export default Spotlight